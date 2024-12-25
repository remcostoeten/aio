/**
 * @author Remco Stoeten
 * @description Authentication form component with email and OAuth options
 */

import type { FormEvent } from 'react'
import { EmailForm } from './components/email-form'
import { OAuthButtons } from './components/oauth-buttons'
import type { AuthFormProps } from './types'

export function AuthForm({ type, action }: AuthFormProps) {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		await action(formData)
	}

	return (
		<div className="grid gap-6">
			<form onSubmit={handleSubmit}>
				<EmailForm type={type} />
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<OAuthButtons />
		</div>
	)
}
