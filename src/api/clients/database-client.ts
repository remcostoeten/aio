import { createSupabaseClient } from './supabase'
import { env } from '../config/env'
import { AuthMethods } from '../types/auth-types'

let dbClient: AuthMethods | null = null

export function getDatabaseClient(): AuthMethods {
  if (!dbClient) {
    try {
      dbClient = createSupabaseClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)
    } catch (error) {
      console.error('Failed to initialize database client:', error)
      throw new Error('Database client initialization failed. Please check your environment variables.')
    }
  }
  return dbClient
}