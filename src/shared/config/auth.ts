import type { Provider } from '@supabase/supabase-js'
import { Github, Mail } from 'lucide-react'

export interface OAuthConfig {
  enabled: boolean
  provider: Provider
  name: string
  icon: typeof Github | typeof Mail
  buttonClass: string
}

export const authConfig = {
  oauth: {
    github: {
      enabled: true,
      provider: 'github',
      name: 'GitHub',
      icon: Github,
      buttonClass: 'border-neutral-800 bg-neutral-900 hover:bg-neutral-800'
    },
    google: {
      enabled: true,
      provider: 'google',
      name: 'Google',
      icon: Mail,
      buttonClass: 'border-red-800 bg-red-700 hover:bg-red-600'
    }
  } as const,
  
  emailAuth: {
    enabled: true,
    requireEmailVerification: false
  }
} as const