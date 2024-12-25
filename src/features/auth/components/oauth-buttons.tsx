/**
 * @author Remco Stoeten
 * @description OAuth authentication buttons component supporting GitHub, Google, and Hotmail providers
 */

import { useState } from 'react'
import { Button } from '@/shared/components/ui'
import { Github, Mail } from 'lucide-react'
import { cn } from '@/shared/helpers'

export function OAuthButtons() {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null)

  const handleOAuthLogin = async (providerId: string) => {
    try {
      setLoadingProvider(providerId)
      console.log('OAuth login:', providerId)
    } catch (error) {
      console.error(`${providerId} login failed:`, error)
    } finally {
      setLoadingProvider(null)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={() => handleOAuthLogin('github')}
        disabled={loadingProvider === 'github'}
        variant="outline"
        className="w-full bg-[#24292F] text-white hover:bg-[#24292F]/90"
      >
        {loadingProvider === 'github' ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <>
            <Github className="h-5 w-5 mr-2" />
            <span>Continue with GitHub</span>
          </>
        )}
      </Button>

      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={() => handleOAuthLogin('google')}
          disabled={loadingProvider === 'google'}
          variant="outline"
          className="w-full bg-white text-black hover:bg-white/90"
        >
          {loadingProvider === 'google' ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
          ) : (
            <>
              <Mail className="h-5 w-5 mr-2" />
              <span>Google</span>
            </>
          )}
        </Button>

        <Button
          onClick={() => handleOAuthLogin('hotmail')}
          disabled={loadingProvider === 'hotmail'}
          variant="outline"
          className="w-full bg-[#2F2F2F] text-white hover:bg-[#2F2F2F]/90"
        >
          {loadingProvider === 'hotmail' ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              <Mail className="h-5 w-5 mr-2" />
              <span>Hotmail</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
