/**
 * @author Remco Stoeten
 * @description Mock authentication service
 */

import { createUser } from '@/server/actions/mutations'
import { getUserByEmail } from '@/server/actions/queries'
import { User } from '@/server/db/schema/user'
import { AuthError, RegisterFormData } from '../types'

export async function register(data: RegisterFormData): Promise<{ user: User } | { error: AuthError }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

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

        // Create new user
        const user = await createUser({
            email: data.email,
            role: 'user',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        })

        // In a real app, we'd hash the password and store it
        // For now, we'll just simulate success
        return { user }
    } catch {
        return {
            error: {
                message: 'Registration failed',
                code: 'AUTH_REGISTER_FAILED'
            }
        }
    }
}

type LoginFormData = {
    email: string
    password: string
}

export async function login(data: LoginFormData): Promise<{ user: User } | { error: AuthError }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    try {
        // Check if user exists
        const user = await getUserByEmail(data.email)
        if (!user) {
            return {
                error: {
                    message: 'Invalid credentials',
                    code: 'AUTH_INVALID_CREDENTIALS'
                }
            }
        }

        // In a real app, we'd verify the password here
        // For now, we'll just simulate success
        return { user }
    } catch {
        return {
            error: {
                message: 'Login failed',
                code: 'AUTH_LOGIN_FAILED'
            }
        }
    } 
