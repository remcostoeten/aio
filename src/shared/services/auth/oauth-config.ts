import type { Provider } from '@supabase/supabase-js'

export const OAUTH_PROVIDERS = {
  github: {
    id: 'github' as Provider,
    name: 'GitHub',
    color: 'bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-[#24292F]/50',
    borderColor: 'border-[#24292F]/10',
    icon: 'github'
  },
  google: {
    id: 'google' as Provider,
    name: 'Google',
    color: 'bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-[#4285F4]/50',
    borderColor: 'border-[#4285F4]/10',
    icon: 'google'
  }
} as const

export type OAuthProvider = keyof typeof OAUTH_PROVIDERS