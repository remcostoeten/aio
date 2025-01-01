'use client'

import { useState } from 'react'
import { Apple, ChevronDown, Github, Mail } from 'lucide-react'
import { DiscordIcon } from '../icons/discord-icon'
import { MicrosoftIcon } from '../icons/microsoft-icon'
import { useAuth } from '../contexts/auth-context'
import { useNavigate } from '@tanstack/react-router'

type Provider = 'github' | 'microsoft' | 'apple' | 'discord'

interface SocialLoginButtonsProps {
  mode: 'signin' | 'signup'
}

export function SocialLoginButtons({ mode }: SocialLoginButtonsProps) {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState<Provider | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { signInWithProvider } = useAuth()
  const navigate = useNavigate()

  const handleProviderSignIn = async (provider: Provider) => {
    try {
      setError(null)
      setLoading(provider)
      
      const { error: authError } = await signInWithProvider(provider)
      
      if (authError) {
        setError(authError.message || `Failed to sign in with ${provider}`)
        return
      }
      
      navigate({ to: '/' })
    } catch (err) {
      setError(err instanceof Error ? err.message : `An unexpected error occurred with ${provider}`)
    } finally {
      setLoading(null)
    }
  }

  const renderProviderButton = (provider: Provider, icon: JSX.Element, label: string, delay?: string) => {
    const isLoading = loading === provider
    const buttonClass = `w-full flex justify-center items-center px-4 py-2 border ${
      showMore ? 'animate-fadeInUp opacity-100 transform-none' : 'opacity-0 translate-y-4 pointer-events-none'
    } ${
      isLoading 
        ? 'bg-surface-dark cursor-not-allowed' 
        : 'bg-surface-light hover:bg-surface active:bg-surface-dark'
    } border-gray-600 rounded text-sm font-medium text-white transition-all duration-200 ease-in-out`

    return (
      <button
        type="button"
        disabled={isLoading || loading !== null}
        onClick={() => handleProviderSignIn(provider)}
        className={buttonClass}
        style={delay ? { animationDelay: delay } : undefined}
      >
        {isLoading ? (
          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        ) : (
          icon
        )}
        {isLoading ? 'Connecting...' : label}
      </button>
    )
  }

  return (
    <div className="space-y-4">
      {renderProviderButton('github', <Github className="h-5 w-5 mr-2" />, 'Continue with GitHub')}

      <div className="relative">
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-center px-4 py-2 text-sm text-gray-500 hover:text-white transition-colors"
            disabled={loading !== null}
          >
            <span>More options</span>
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showMore ? 'rotate-180' : ''
              }`}
            />
          </button>

          {renderProviderButton('microsoft', <MicrosoftIcon className="h-5 w-5 mr-2" />, 'Continue with Microsoft', '100ms')}
          {renderProviderButton('apple', <Apple className="h-5 w-5 mr-2" />, 'Continue with Apple', '200ms')}
          {renderProviderButton('discord', <DiscordIcon className="h-5 w-5 mr-2" />, 'Continue with Discord', '300ms')}
        </div>
      </div>

      {error && (
        <div className="text-red-400 text-sm animate-error bg-red-500/10 p-3 rounded-lg" key={error}>
          {error}
        </div>
      )}
    </div>
  )
}
