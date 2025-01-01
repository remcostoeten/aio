import { z } from 'zod'

const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().optional(),
  VITE_SUPABASE_ANON_KEY: z.string().optional(),
  VITE_ADMIN_EMAIL: z.string().optional()
})

function validateEnv() {
  try {
    return envSchema.parse({
      VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
      VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
      VITE_ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL,
    })
  } catch (error) {
    console.warn('⚠️ Some environment variables are missing. Features requiring Supabase will be disabled.')
    return {
      VITE_SUPABASE_URL: undefined,
      VITE_SUPABASE_ANON_KEY: undefined,
      VITE_ADMIN_EMAIL: undefined
    }
  }
}

export const env = validateEnv()
