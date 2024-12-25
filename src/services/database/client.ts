/**
 * @author Remco Stoeten
 * @description Database client configuration
 */

import { createClient } from '@supabase/supabase-js'
import { env } from '@/env.mjs'

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY
) 
