import { z } from 'zod'

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().min(1, 'Supabase URL is required'),
  VITE_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase Anon Key is required'),
})

function validateEnv() {
  try {
    return envSchema.parse({
      VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
      VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    })
  } catch (error) {
    console.error('❌ Invalid environment variables:', error)
    throw new Error(
      '❌ Invalid environment variables: Please check your .env file and ensure all required variables are set.'
    )
  }
}

export const env = validateEnv()