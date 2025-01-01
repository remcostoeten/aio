import { createClient } from '@supabase/supabase-js';
import { env } from '../env';

let client: ReturnType<typeof createClient> | null = null;

export const getDatabaseClient = () => {
  if (!env.VITE_SUPABASE_URL || !env.VITE_SUPABASE_ANON_KEY) {
    console.warn('⚠️ Supabase credentials not found. Some features will be disabled.');
    return null;
  }

  if (!client) {
    client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }

  return client;
};
