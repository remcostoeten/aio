import { useState } from 'react'
import { Apple, ChevronDown, Github, Mail } from 'lucide-react'
import { DiscordIcon } from '../icons/discord-icon'
import { MicrosoftIcon } from '../icons/microsoft-icon'
import { useAuth } from '../contexts/auth-context'

interface SocialLoginButtonsProps {
  mode: 'signin' | 'signup'
}

export function SocialLoginButtons({ mode }: SocialLoginButtonsProps) {
  const [showMore, setShowMore] = useState(false)
  const { signInWithProvider } = useAuth()

  const handleProviderSignIn = async (provider: string) => {
    try {
      await signInWithProvider(provider)
    } catch (error) {
      console.error(`Failed to sign in with ${provider}:`, error)
    }
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => handleProviderSignIn('github')}
        className="w-full flex justify-center items-center px-4 py-2 border border-gray-700 rounded text-sm font-medium text-white bg-surface-light hover:bg-surface transition-all duration-200 ease-in-out active:bg-surface-dark"
      >
        <Github className="h-5 w-5 mr-2" />
        Continue with GitHub
      </button>

      <div className="relative">
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-center px-4 py-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <span>More options</span>
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showMore ? 'rotate-180' : ''
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => handleProviderSignIn('microsoft')}
            className={`w-full flex justify-center items-center px-4 py-2 border border-gray-600 rounded text-sm font-medium text-white bg-surface-light hover:bg-surface transition-all duration-200 ease-in-out active:bg-surface-dark ${
              showMore 
                ? 'animate-fadeInUp opacity-100 transform-none' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ animationDelay: '100ms' }}
          >
            <MicrosoftIcon className="h-5 w-5 mr-2" />
            Continue with Microsoft
          </button>

          <button
            type="button"
            onClick={() => handleProviderSignIn('apple')}
            className={`w-full flex justify-center items-center px-4 py-2 border border-gray-600 rounded text-sm font-medium text-white bg-surface-light hover:bg-surface transition-all duration-200 ease-in-out active:bg-surface-dark ${
              showMore 
                ? 'animate-fadeInUp opacity-100 transform-none' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <Apple className="h-5 w-5 mr-2" />
            Continue with Apple
          </button>

          <button
            type="button"
            onClick={() => handleProviderSignIn('discord')}
            className={`w-full flex justify-center items-center px-4 py-2 border border-gray-600 rounded text-sm font-medium text-white bg-surface-light hover:bg-surface transition-all duration-200 ease-in-out active:bg-surface-dark ${
              showMore 
                ? 'animate-fadeInUp opacity-100 transform-none' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            style={{ animationDelay: '300ms' }}
          >
            <DiscordIcon className="h-5 w-5 mr-2" />
            Continue with Discord
          </button>
        </div>
      </div>
    </div>
  )
}