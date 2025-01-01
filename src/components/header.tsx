import { Link } from '@tanstack/react-router'
import { useAuth } from '../features/auth/contexts/auth-context'
import { Button } from './ui/button'
import { MainNav } from './navigation/main-nav'
import { UserNav } from './navigation/user-nav'
import Logo from './theme/logo'

export function Header() {
	const { user } = useAuth()

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-6">
						<Logo />
						<MainNav />
					</div>

					<div className="flex items-center space-x-4">
						{user ? (
							<UserNav />
						) : (
							<Link to="/signin">
								<Button>Sign in</Button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}
