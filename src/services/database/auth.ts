/**
 * @author Remco Stoeten
 * @description Authentication database service layer providing core auth functionality.
 * Handles user authentication state and operations through database client.
 */

import { db } from './client'
import type { User } from './types'

/**
 * @type {Object} authDb - Authentication database operations
 */
export const authDb = {
  /**
   * @async
   * @function getCurrentUser
   * @returns {Promise<User>} The currently authenticated user
   * @throws {Error} If authentication query fails
   */
  getCurrentUser: async (): Promise<User> => {
    const { data: { user }, error } = await db.auth.getUser()
    if (error) throw error
    if (!user) return null as unknown as User
    
    // Get additional user data from our users table
    const { data: userData, error: userError } = await db
      .from('users')
      .select('role, avatar_url')
      .eq('id', user.id)
      .single()
      
    if (userError) throw userError

    return {
      id: user.id,
      email: user.email!,
      avatar_url: userData?.avatar_url,
      role: userData?.role || 'user'
    } as User
  },

  /**
   * @async
   * @function signInWithEmail
   * @param {Object} data - The sign in data
   * @returns {Promise<void>}
   * @throws {Error} If sign in operation fails
   */
  signInWithEmail: async (data: { email: string; password: string }): Promise<void> => {
    const { error } = await db.auth.signInWithPassword(data)
    if (error) throw error
  },

  /**
   * @async
   * @function signInWithProvider
   * @param {String} provider - The sign in provider
   * @returns {Promise<void>}
   * @throws {Error} If sign in operation fails
   */
  signInWithProvider: async (provider: 'github' | 'google'): Promise<void> => {
    const { error } = await db.auth.signInWithOAuth({ provider })
    if (error) throw error
  },

  /**
   * @async
   * @function signOut
   * @returns {Promise<void>}
   * @throws {Error} If sign out operation fails
   */
  signOut: async (): Promise<void> => {
    const { error } = await db.auth.signOut()
    if (error) throw error
  }
} 

// Export getCurrentUser directly if needed
export const getCurrentUser = authDb.getCurrentUser 
