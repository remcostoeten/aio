"use client"

import { OAuthButtons } from './oauth-buttons'
import { EmailForm } from './email-form'
import { theme } from '@/shared/config/theme'

interface AuthFormProps {
  type: 'login' | 'register'
}

export function AuthForm({ type }: AuthFormProps) {
  return (
    <div className="space-y-6">
      <OAuthButtons />
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className={`bg-[${theme.colors.background.default}] px-2 text-neutral-400`}>
            or continue with email
          </span>
        </div>
      </div>

      <EmailForm type={type} />

      <div className="text-xs text-center text-neutral-400">
        By continuing, you agree to our{' '}
        <a href="#" className={`text-[${theme.colors.primary}] hover:opacity-80 transition-opacity`}>
          Terms of Service
        </a>
        {' '}and{' '}
        <a href="#" className={`text-[${theme.colors.primary}] hover:opacity-80 transition-opacity`}>
          Privacy Policy
        </a>
      </div>
    </div>
  )
}