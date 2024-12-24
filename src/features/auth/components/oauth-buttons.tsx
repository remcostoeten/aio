"use client"

import { useState } from 'react'
import { signInWithOAuth } from '@/shared/services/auth/oauth'
import { toast } from 'sonner'
import { Github, Mail } from 'lucide-react'
import { OAUTH_PROVIDERS } from '@/core/config/auth/oauth-providers'

export function OAuthButtons() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)

  const handleOAuthLogin = async (providerId: string) => {
    try {
      setLoadingProvider(providerId)
      await signInWithOAuth(providerId as any)
    } catch (error) {
      console.error(`${providerId} login failed:`, error)
      toast.error(`Failed to sign in with ${providerId}. Please try again.`)
    } finally {
      setLoadingProvider(null)
    }
  }

  const baseButtonClasses = "relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-[6px] outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border w-full flex items-center justify-center text-base px-4 py-2 h-[42px] hover:opacity-90 hover:border-[rgb(75,75,75)] disabled:opacity-50"

  return (
    <div className="w-full space-y-4">
      {/* GitHub Button (Full Width) */}
      <div className="w-full">
        <button
          onClick={() => handleOAuthLogin('github')}
          disabled={loadingProvider === 'github'}
          className={`${baseButtonClasses} ${OAUTH_PROVIDERS.github.className}`}
        >
          {loadingProvider === 'github' ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <>
              <Github className="h-5 w-5 mr-2" />
              <span className="truncate">Continue with GitHub</span>
            </>
          )}
        </button>
      </div>

      {/* Google and Microsoft Buttons Row */}
      <div className="w-full flex gap-4">
        {/* Google Button */}
        <div className="w-1/2">
          <button
            onClick={() => handleOAuthLogin('google')}
            disabled={loadingProvider === 'google'}
            className={`${baseButtonClasses} ${OAUTH_PROVIDERS.google.className}`}
          >
            {loadingProvider === 'google' ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <>
                <Mail className="h-5 w-5 mr-2" />
                <span className="truncate">Google</span>
              </>
            )}
          </button>
        </div>

        {/* Microsoft Button */}
        <div className="w-1/2">
          <button
            onClick={() => handleOAuthLogin('microsoft')}
            disabled={loadingProvider === 'microsoft'}
            className={`${baseButtonClasses} ${OAUTH_PROVIDERS.microsoft.className}`}
          >
            {loadingProvider === 'microsoft' ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              <>
                <Mail className="h-5 w-5 mr-2" />
                <span className="truncate">Microsoft</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}