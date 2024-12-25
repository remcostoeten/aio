/**
 * @author Remco Stoeten
 * @description Auth mutation handlers for user authentication
 */

import { db } from 'db'
import type { SignInData, LoginResponse } from '@/server/db/types'

export async function loginAction(formData: FormData): Promise<LoginResponse> {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return {
        success: false,
        error: 'Email and password are required'
      }
    }

    const user = await db.query.users.findFirst({
      where: { email }
    })

    if (!user) {
      return {
        success: false,
        error: 'Invalid credentials'
      }
    }

    // In a real app, you would verify the password here
    // For now, we'll just simulate success
    return {
      success: true,
      user
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred'
    }
  }
}

export async function signIn(data: SignInData): Promise<LoginResponse> {
  try {
    const user = await db.query.users.findFirst({
      where: { email: data.email }
    })

    if (!user) {
      return {
        success: false,
        error: 'Invalid credentials'
      }
    }

    // In a real app, you would verify the password here
    return {
      success: true,
      user
    }
  } catch (error) {
    console.error('Sign in error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred'
    }
  }
}
