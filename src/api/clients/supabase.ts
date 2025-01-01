import { createClient } from '@supabase/supabase-js';
import { createAuthMethods } from '../auth/auth-functions';
import { AuthMethods } from '../types/auth-types';

// Function to create a Supabase client with auth methods
export function createSupabaseClient(url: string, key: string): AuthMethods {
  const supabase = createClient(url, key);
  return createAuthMethods(supabase);
}
