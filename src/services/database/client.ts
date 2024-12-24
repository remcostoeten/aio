import { Database } from '@/shared/services/supabase/types'
import { createClient } from '@supabase/supabase-js'

/**
 * @author Remco Stoeten
 * @description Database client for Supabase.
 * Currently using Supabase, but could be swapped for any other client
 */

export const db = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
) 
