/**
 * @author Remco Stoeten
 * @description Server action for user login
 */

'use server'

import type { AuthFormData } from '@/features/auth/types'
import { getUserByEmail } from '@/server/actions/queries/get-user-by-email'

export default async function login(data: AuthFormData) {
    try {
        // Mock implementation
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
    } catch (error) {
        return {
            error: {
                message: 'Login failed',
                code: 'AUTH_LOGIN_FAILED'
            }
        }
    } 
