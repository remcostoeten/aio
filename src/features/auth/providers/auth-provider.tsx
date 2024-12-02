'use client'

/**
 * @author Remco Stoeten
 * @description Authentication context provider
 */

import { logout, register } from '@/server/actions/mutations'
import { Profile } from '@/server/db/schema/profile'
import { User } from '@/server/db/schema/user'
import * as React from 'react'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { AuthError, RegisterFormData } from '../types'

type AuthState = {
    user: User | null
    profile: Profile | null
    loading: boolean
}

type AuthContextType = AuthState & {
    login: (email: string, password: string) => Promise<void>
    register: (data: RegisterFormData) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type LoginResponse = {
    user: User
    profile: Profile
    error?: never
} | {
    user?: never
    profile?: never
    error: AuthError
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<AuthState>({
        user: null,
        profile: null,
        loading: true
    })

    useEffect(() => {
        // Check for stored auth state
        const storedUser = localStorage.getItem('user')
        const storedProfile = localStorage.getItem('profile')

        if (storedUser && storedProfile) {
            setState({
                user: JSON.parse(storedUser),
                profile: JSON.parse(storedProfile),
                loading: false
            })
        } else {
            setState(prev => ({ ...prev, loading: false }))
        }
    }, [])

    const handleLogin = useCallback(async (email: string, password: string) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            })
            const result: LoginResponse = await response.json()
            if ('error' in result) {
                toast.error('Login failed', {
                    description: result.error.message
                })
                return
            }

            setState({
                user: result.user,
                profile: result.profile,
                loading: false
            })

            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('profile', JSON.stringify(result.profile))

            toast.success('Login successful', {
                description: 'Welcome back!'
            })
        } catch (_error) {
            toast.error('Login failed', {
                description: 'An unexpected error occurred'
            })
        }
    }, [])

    const handleRegister = useCallback(async (data: RegisterFormData) => {
        try {
            const result = await register(data)
            if ('error' in result) {
                toast.error('Registration failed', {
                    description: result.error.message
                })
                return
            }

            setState({
                user: result.user,
                profile: result.profile,
                loading: false
            })

            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('profile', JSON.stringify(result.profile))

            toast.success('Registration successful')
        } catch (error) {
            toast.error('Registration failed', {
                description: 'An unexpected error occurred'
            })
        }
    }, [])

    const handleLogout = useCallback(async () => {
        try {
            await logout()
            localStorage.removeItem('user')
            localStorage.removeItem('profile')
            setState({ user: null, profile: null, loading: false })
            toast.success('Logged out successfully')
        } catch {
            toast.error('Logout failed')
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login: handleLogin,
                register: handleRegister,
                logout: handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
} 
