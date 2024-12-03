/**
 * @author Remco Stoeten
 * @description Unified authentication form with i18n support
 */

'use client'

import { login, register } from '@/server/actions/mutations'
import LoadingButton from '@/shared/ui/loading-button'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Input } from 'ui'
import type { AuthFormData } from '../types'

type AuthFormProps = {
    type: 'login' | 'register'
}

export default function AuthForm({ type }: AuthFormProps) {
    const t = useTranslations('auth')
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const data: AuthFormData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            ...(type === 'register' && {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
            })
        }

        try {
            const result = type === 'login'
                ? await login(data)
                : await register(data)

            if ('error' in result && result.error) {
                toast.error(t(`${type}.error`), {
                    description: result.error.message
                })
                return
            }

            toast.success(t(`${type}.success`))
            router.push('/dashboard')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
                {type === 'register' && (
                    <>
                        <Input
                            name="firstName"
                            placeholder="First Name"
                            required
                            disabled={isLoading}
                        />
                        <Input
                            name="lastName"
                            placeholder="Last Name"
                            required
                            disabled={isLoading}
                        />
                    </>
                )}
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    disabled={isLoading}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    disabled={isLoading}
                />
            </div>
            <LoadingButton
                type="submit"
                className="w-full"
                isLoading={isLoading}
                loadingText={type === 'login' ? 'Signing in...' : 'Creating account...'}
            >
                {type === 'login' ? 'Sign in' : 'Create account'}
            </LoadingButton>
        </form>
    )
}
