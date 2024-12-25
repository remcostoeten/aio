
import { motion } from 'framer-motion'
import { Github, Mail } from 'lucide-react'
import { cn } from '@/shared/helpers'
import type { Provider } from '@supabase/supabase-js'

const icons = {
  github: Github,
  google: Mail
} as const

interface OAuthButtonProps {
  provider: {
    id: Provider
    name: string
    color: string
    borderColor: string
  }
  onClick: () => void
  isLoading?: boolean
  index?: number
}

export function OAuthButton({ provider, onClick, isLoading, index = 0 }: OAuthButtonProps) {
  const Icon = icons[provider.id as keyof typeof icons]

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        "relative w-full flex items-center justify-center gap-2",
        "px-4 py-2.5 rounded-lg border text-white",
        "text-sm font-medium transition-all duration-200",
        provider.color,
        provider.borderColor,
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: index * 0.1,
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
    >
      {isLoading ? (
        <div className="absolute left-4 animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
      ) : (
        <Icon className="w-5 h-5" />
      )}
      <span>Continue with {provider.name}</span>
    </motion.button>
  )
}