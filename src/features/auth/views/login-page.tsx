/**
 * @author Remco Stoeten
 * @description Main login page component with form handling and navigation
 */

import { useAuth } from '@/shared/hooks/use-auth'
import { useUser } from '@/state/auth'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../api/mutations'
import { AuthForm } from '../components'
import { AuthLayout } from './layout'

export default function LoginPage() {
	const navigate = useNavigate()
	const { setUser: setAuthUser } = useAuth()
	const { user, refreshUser } = useUser()

	useEffect(() => {
		if (user) {
			navigate('/dashboard')
		}
	}, [user, navigate])

	const handleLogin = async (formData: FormData): Promise<void> => {
		try {
			const response = await loginAction(formData)

			if (!response?.success || !response?.user) {
				throw new Error(response?.error || 'Authentication failed')
			}

			setAuthUser(response.user)
			await refreshUser()
			navigate('/dashboard')
		} catch (error) {
			console.error('Login error:', error)
			throw error
		}
	}

	if (user) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-background">
				<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
			</div>
		)
	}

	return (
		<AuthLayout
			title="Welcome back"
			subtitle={
				<div className="text-center text-sm text-muted-foreground">
					Don't have an account?{' '}
					<Link
						to="/register"
						className="text-primary hover:text-primary/80 transition-colors"
					>
						Sign Up Now
					</Link>
				</div>
			}
		>
			<AuthForm type="login" action={handleLogin} />
		</AuthLayout>
	)
}
