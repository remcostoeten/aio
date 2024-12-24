import { Github, Mail } from 'lucide-react'
import type { Provider } from '@supabase/supabase-js'

export interface OAuthConfig {
  id: Provider
  name: string
  icon: typeof Github | typeof Mail
  className: string
}

export const OAUTH_PROVIDERS: Record<string, OAuthConfig> = {
  github: {
    id: 'github',
    name: 'GitHub',
    icon: Github,
    className: 'bg-[rgb(36,36,36)] border-[rgb(54,54,54)] text-[rgb(250,250,250)]'
  },
  microsoft: {
    id: 'azure',
    name: 'Microsoft',
    icon: Mail,
    className: 'bg-transparent border-[rgb(54,54,54)] text-[rgb(250,250,250)]'
  },
  google: {
    id: 'google',
    name: 'Google', 
    icon: Mail,
    className: 'bg-transparent border-[rgb(54,54,54)] text-[rgb(250,250,250)]'
  }
} as const

export type OAuthProvider = keyof typeof OAUTH_PROVIDERS