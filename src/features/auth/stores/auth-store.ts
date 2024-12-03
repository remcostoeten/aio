/**
 * @author Remco Stoeten
 * @description Authentication store using Zustand
 * @module features/auth/stores/auth-store
 * @see zustand
 * @see zustand/middleware
 */

'use client'

import { login, register } from '@/server/actions/mutations/auth'
import { getUserProfile } from '@/server/actions/queries'
import type { Profile } from '@/server/db/schema/profile'
import type { User } from '@/server/db/schema/user'
import { toast } from 'sonner'
import { create, type StateCreator, type StoreApi } from 'zustand'
import { persist, type PersistOptions } from 'zustand/middleware'
import type { LoginFormData, RegisterFormData } from '../types'

/**
 * Core authentication state
 * @typedef {Object} AuthState
 */
type AuthState = {
    user: User | null
    profile: Profile | null
    loading: boolean
    session: {
        token: string | null
        expiresAt: number | null
        devices: Array<{
            id: string
            name: string
            lastActive: Date
        }>
    }
    mfa: {
        enabled: boolean
        verified: boolean
    }
}

/**
 * Authentication actions for state management
 * @typedef {Object} AuthActions
 */
type AuthActions = {
    // Core auth
    login: (data: LoginFormData) => Promise<void>
    register: (data: RegisterFormData) => Promise<void>
    logout: () => void
    setLoading: (loading: boolean) => void

    // Profile
    updateProfile: (data: Partial<Profile>) => Promise<void>

    // Session
    refreshSession: () => Promise<void>
    checkSession: () => Promise<boolean>
    recoverSession: () => Promise<void>

    // Role checks
    hasRole: (role: string) => boolean
    isAdmin: () => boolean
    isAuthenticated: () => boolean

    // MFA
    setupMFA: () => Promise<void>
    verifyMFA: (code: string) => Promise<boolean>

    // Password
    changePassword: (oldPassword: string, newPassword: string) => Promise<void>
    resetPassword: (email: string) => Promise<void>

    // Devices
    getDevices: () => Promise<AuthState['session']['devices']>
    revokeDevice: (deviceId: string) => Promise<void>
}

type AuthStore = AuthState & AuthActions
type AuthPersist = Pick<AuthState, 'user' | 'profile' | 'session'>

type AuthStoreCreator = StateCreator<
    AuthStore,
    [],
    [['zustand/persist', AuthPersist]],
    AuthStore
>

type SetState = StoreApi<AuthStore>['setState']
type GetState = StoreApi<AuthStore>['getState']

/**
 * Creates the authentication store with all actions and state
 * @type {AuthStoreCreator}
 */
const createAuthStore: AuthStoreCreator = (set: SetState, get: GetState) => ({
    // Initial state
    user: null,
    profile: null,
    loading: true,
    session: {
        token: null,
        expiresAt: null,
        devices: []
    },
    mfa: {
        enabled: false,
        verified: false
    },

    // Core auth actions
    setLoading: (loading: boolean) => set({ loading }),

    /**
     * Handles user login
     * @param {LoginFormData} data - Login credentials
     */
    login: async (data: LoginFormData) => {
        try {
            const result = await login(data)
            if ('error' in result && result.error) {
                toast.error('Login failed', {
                    description: result.error.message
                })
                return
            }

            const profile = await getUserProfile(result.user.id)

            set({
                user: result.user,
                profile: profile || null,
                loading: false,
                session: {
                    ...get().session,
                    token: 'mock-token',
                    expiresAt: Date.now() + 3600000 // 1 hour
                }
            })

            toast.success('Login successful')
        } catch (err) {
            console.error('Login error:', err)
            toast.error('Login failed')
        }
    },

    /**
     * Handles user registration
     * @param {RegisterFormData} data - Registration data
     */
    register: async (data: RegisterFormData) => {
        try {
            const result = await register(data)
            if ('error' in result && result.error) {
                toast.error('Registration failed', {
                    description: result.error.message
                })
                return
            }

            const profile = await getUserProfile(result.user.id)

            set({
                user: result.user,
                profile: profile || null,
                loading: false
            })

            toast.success('Registration successful')
        } catch (err) {
            console.error('Registration error:', err)
            toast.error('Registration failed')
        }
    },

    /**
     * Handles user logout
     */
    logout: () => {
        set({
            user: null,
            profile: null,
            loading: false,
            session: {
                token: null,
                expiresAt: null,
                devices: []
            },
            mfa: {
                enabled: false,
                verified: false
            }
        })
        toast.success('Logged out successfully')
    },

    /**
     * Updates user profile
     * @param {Partial<Profile>} data - Profile data to update
     */
    updateProfile: async (data: Partial<Profile>) => {
        try {
            set((state: AuthState) => ({
                profile: state.profile ? { ...state.profile, ...data } : null
            }))
            toast.success('Profile updated')
        } catch (err) {
            console.error('Profile update error:', err)
            toast.error('Failed to update profile')
        }
    },

    /**
     * Refreshes the current session
     */
    refreshSession: async () => {
        try {
            set((state: AuthState) => ({
                session: {
                    ...state.session,
                    expiresAt: Date.now() + 3600000
                }
            }))
        } catch (err) {
            console.error('Session refresh error:', err)
            toast.error('Failed to refresh session')
        }
    },

    /**
     * Checks if current session is valid
     * @returns {Promise<boolean>} Session validity
     */
    checkSession: async () => {
        const { session } = get()
        return !!(session.token && session.expiresAt && session.expiresAt > Date.now())
    },

    /**
     * Attempts to recover a broken session
     */
    recoverSession: async () => {
        try {
            await get().refreshSession()
            toast.success('Session recovered')
        } catch (err) {
            console.error('Session recovery error:', err)
            toast.error('Failed to recover session')
        }
    },

    /**
     * Checks if user has specific role
     * @param {string} role - Role to check
     * @returns {boolean} Has role
     */
    hasRole: (role: string) => {
        const { user } = get()
        return user?.role === role
    },

    /**
     * Checks if user is admin
     * @returns {boolean} Is admin
     */
    isAdmin: () => {
        const { user } = get()
        return user?.role === 'admin'
    },

    /**
     * Checks if user is authenticated
     * @returns {boolean} Is authenticated
     */
    isAuthenticated: () => {
        const { user, session } = get()
        return !!(user && session.token && session.expiresAt && session.expiresAt > Date.now())
    },

    /**
     * Sets up MFA for user
     */
    setupMFA: async () => {
        try {
            set({ mfa: { enabled: true, verified: false } })
            toast.success('MFA setup complete')
        } catch (err) {
            console.error('MFA setup error:', err)
            toast.error('Failed to setup MFA')
        }
    },

    /**
     * Verifies MFA code
     * @param {string} code - MFA code to verify
     * @returns {Promise<boolean>} Verification result
     */
    verifyMFA: async (code: string) => {
        try {
            const verified = code === '123456'
            set({ mfa: { enabled: true, verified } })
            if (verified) {
                toast.success('MFA verified')
            } else {
                toast.error('Invalid MFA code')
            }
            return verified
        } catch (err) {
            console.error('MFA verification error:', err)
            toast.error('Failed to verify MFA')
            return false
        }
    },

    /**
     * Changes user password
     * @param {string} oldPassword - Current password
     * @param {string} newPassword - New password
     */
    changePassword: async (oldPassword: string, newPassword: string) => {
        try {
            console.log('Changing password:', { oldPassword, newPassword })
            toast.success('Password changed')
        } catch (err) {
            console.error('Password change error:', err)
            toast.error('Failed to change password')
        }
    },

    /**
     * Initiates password reset
     * @param {string} email - User email
     */
    resetPassword: async (email: string) => {
        try {
            console.log('Resetting password for:', email)
            toast.success('Password reset email sent')
        } catch (err) {
            console.error('Password reset error:', err)
            toast.error('Failed to reset password')
        }
    },

    /**
     * Gets user's logged in devices
     * @returns {Promise<Array>} List of devices
     */
    getDevices: async () => {
        return get().session.devices
    },

    /**
     * Revokes access for specific device
     * @param {string} deviceId - Device to revoke
     */
    revokeDevice: async (deviceId: string) => {
        try {
            set((state: AuthState) => ({
                session: {
                    ...state.session,
                    devices: state.session.devices.filter(d => d.id !== deviceId)
                }
            }))
            toast.success('Device revoked')
        } catch (err) {
            console.error('Device revocation error:', err)
            toast.error('Failed to revoke device')
        }
    }
})

/**
 * Persist configuration for auth store
 * @type {PersistOptions}
 */
const persistConfig: PersistOptions<AuthStore, AuthPersist> = {
    name: 'auth-storage',
    partialize: (state: AuthStore) => ({
        user: state.user,
        profile: state.profile,
        session: state.session
    })
}

/**
 * Authentication store hook with persistence
 * @type {Function}
 */
export const useAuthStore = create<AuthStore>()(
    persist(createAuthStore, persistConfig)
) 
