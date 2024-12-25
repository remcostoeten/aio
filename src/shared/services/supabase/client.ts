/**
 * @author Remco Stoeten
 * @description Supabase client configuration
 */

import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
	throw new Error(
		'Missing Supabase credentials. Please check your environment variables:\n' +
			'- VITE_SUPABASE_URL\n' +
			'- VITE_SUPABASE_ANON_KEY'
	)
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
	auth: {
		autoRefreshToken: true,
		persistSession: true
	}
})
