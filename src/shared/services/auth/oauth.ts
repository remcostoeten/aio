import { supabase } from '../supabase/client'
import { toast } from 'sonner'
import type { Provider } from '@supabase/supabase-js'

export async function signInWithOAuth(provider: Provider) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })

    if (error) throw error
    
    if (!data?.url) {
      throw new Error('No OAuth URL returned')
    }

    // Redirect to OAuth provider
    window.location.href = data.url
  } catch (error) {
    console.error('OAuth error:', error)
    toast.error('Failed to sign in with GitHub. Please try again.')
    throw error
  }
}

export async function handleOAuthCallback() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) throw error
    
    if (session) {
      toast.success('Successfully signed in!')
      return session
    }

    throw new Error('No session found')
  } catch (error) {
    console.error('OAuth callback error:', error)
    toast.error('Authentication failed. Please try again.')
    throw error
  }
}