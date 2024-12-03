/**
 * @author Remco Stoeten
 * @description Authentication mutations
 */

'use server'

import { env } from '@/core/config/env'
import type { LoginFormData, RegisterFormData } from '@/features/auth/types'
import { getUserByEmail } from '@/server/actions/queries'
import type { User } from '@/server/db/schema/user'

type AuthResponse = {
    user: User
    error?: never
} | {
    user?: never
    error: {
        message: string
        code: string
    }
}

export async function login(data: LoginFormData): Promise<AuthResponse> {
    try {
        const user = await getUserByEmail(data.email)
        if (!user) {
            return {
                error: {
                    message: 'Invalid credentials',
                    code: 'AUTH_INVALID_CREDENTIALS'
                }
            }
        }

        // In real implementation, verify password here
        return { user }
    } catch (err) {
        console.error('Login failed:', err)
        return {
            error: {
                message: 'Login failed',
                code: 'AUTH_LOGIN_FAILED'
            }
        }
    }
}

export async function register(data: RegisterFormData): Promise<AuthResponse> {
    try {
        // Check if user exists
        const existingUser = await getUserByEmail(data.email)
        if (existingUser) {
            return {
                error: {
                    message: 'User already exists',
                    code: 'AUTH_DUPLICATE_USER'
                }
            }
        }

        // Check if email matches admin email
        const isAdmin = env.ADMIN_EMAIL === data.email

        // Create new user
        const user = {
            id: crypto.randomUUID(),
            email: data.email,
            role: isAdmin ? 'admin' : 'user',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        } satisfies User

        // In real implementation, save to database
        return { user }
    } catch (err) {
        console.error('Registration failed:', err)
        return {
            error: {
                message: 'Registration failed',
                code: 'AUTH_REGISTER_FAILED'
            }
        }
    }
} 
