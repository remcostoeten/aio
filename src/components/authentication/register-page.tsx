// Thisis copied from my nextjs repository. So hence some next specific stuff, has to bemigrated to react

'use client'

import AuthForm from '@/components/auth/auth-form'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/shared/hooks/use-auth'
import { toast } from 'sonner'
import { registerAction } from '../actions/register'
import { useUser } from '@/state/auth'
import AuthLayout from '@/components/auth/auth-layout'
import Link from 'next/link'

export default function RegisterPage() {
    const router = useRouter()
    const { setUser: setAuthUser } = useAuth()
    const { refreshUser } = useUser()

    const handleRegister = async (formData: FormData): Promise<void> => {
        const toastId = toast.loading('Creating your account...')

        try {
            const response = await registerAction(formData)
            console.log('Registration response:', response)

            if (!response?.success || !response?.user) {
                toast.error(response?.error || 'Registration failed', {
                    id: toastId,
                })
                return
            }

            setAuthUser({
                id: response.user.id.toString(),
                email: response.user.email,
                firstName: response.user.firstName || '',
                lastName: response.user.lastName || '',
            })
            await refreshUser()

            toast.success('Account created successfully', { id: toastId })
            router.replace('/dashboard')
        } catch (error) {
            console.error('Registration error:', error)
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : 'An unexpected error occurred'
            toast.error(errorMessage, { id: toastId })
        }
    }

    return (
        <AuthLayout
            title="Create an account"
            subtitle={
                <>
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="underline underline-offset-4 hover:text-neutral-400"
                    >
                        Sign in
                    </Link>
                </>
            }
        >
            <AuthForm type="register" action={handleRegister} />
        </AuthLayout>
    )
}
