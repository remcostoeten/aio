import { Apple, ChevronDown, Github } from 'lucide-react'
import { DiscordIcon } from '../icons/discord-icon'
import { MicrosoftIcon } from '../icons/microsoft-icon'
import { useAuth } from '../contexts/auth-context' 
import { env } from '../../../api/env'
import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverBody
} from '../../../shared/components/popover'

type SocialLoginButtonsProps = {
	mode: 'signin' | 'signup'
}

export function SocialLoginButtons({ mode }: SocialLoginButtonsProps) {
	const { signInWithProvider } = useAuth()

	const handleProviderSignIn = async (provider: string) => {
		try {
			if (!provider) {
				console.error('Provider is required');
				return;
			}

			await signInWithProvider(provider)
		} catch (error) {
			console.error(`Failed to sign in with ${provider}:`, error)
		}
	}

	const buttonBaseClass =
		'w-full flex justify-center items-center px-4 py-2.5 rounded-md text-sm font-medium bg-surface hover:bg-surface-light active:bg-surface-dark text-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

	return (
		<div className="space-y-3">
			<button
				type="button"
				onClick={() => handleProviderSignIn('github')}
				disabled={!env.VITE_SUPABASE_URL}
				className={buttonBaseClass}
			>
				<Github className="h-5 w-5 mr-2.5" />
				Continue with GitHub
			</button>

			<div className="relative w-full text-center">
				<PopoverRoot>
					<PopoverTrigger className="text-[13px] text-gray-500 hover:text-white/90 transition-colors mt-2 inline-flex items-center group">
						<div className="flex items-center">
							<span>More options</span>
							<ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
						</div>
					</PopoverTrigger>
					<PopoverContent className="w-full bg-surface border border-border/40 shadow-xl rounded-lg backdrop-blur-sm backdrop-filter">
						<PopoverBody className="space-y-3 p-3">
							<div className="px-2 py-1.5 text-sm text-gray-400 text-center border-b border-border/40 mb-2">
								Additional sign in options
							</div>
							<button
								type="button"
								onClick={() =>
									handleProviderSignIn('microsoft')
								}
								disabled={!env.VITE_SUPABASE_URL}
								className={buttonBaseClass}
							>
								<MicrosoftIcon className="h-5 w-5 mr-2.5" />
								Continue with Microsoft
							</button>

							<button
								type="button"
								onClick={() => handleProviderSignIn('apple')}
								disabled={!env.VITE_SUPABASE_URL}
								className={buttonBaseClass}
							>
								<Apple className="h-5 w-5 mr-2.5" />
								Continue with Apple
							</button>

							<button
								type="button"
								onClick={() => handleProviderSignIn('discord')}
								disabled={!env.VITE_SUPABASE_URL}
								className={buttonBaseClass}
							>
								<DiscordIcon className="h-5 w-5 mr-2.5" />
								Continue with Discord
							</button>
						</PopoverBody>
					</PopoverContent>
				</PopoverRoot>
			</div>
		</div>
	)
}
