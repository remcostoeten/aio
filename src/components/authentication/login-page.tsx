// Thisis copied from my nextjs repository. So hence some next specific stuff, has to bemigrated to react

'use client'

import AuthForm from '@/components/auth/auth-form'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/shared/hooks/use-auth'
import { toast } from 'sonner'
import { loginAction } from '../actions'
import { useUser } from '@/state/auth'
import AuthLayout from '@/components/auth/auth-layout'
import Link from 'next/link'
import { useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const { setUser: setAuthUser } = useAuth()
  const { user, refreshUser } = useUser()

  useEffect(() => {
    if (user) {
      router.replace('/dashboard')
    }
  }, [user, router])

  const handleLogin = async (formData: FormData): Promise<void> => {
    const toastId = toast.loading('Logging in...')

    try {
      const response = await loginAction(formData)

      if (!response?.success || !response?.user) {
        toast.error(response?.error || 'Authentication failed', {
          id: toastId
        })
        return
      }

      setAuthUser(response.user)
      await refreshUser()

      toast.success('Successfully logged in', { id: toastId })
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Login error:', error)
      toast.error(error instanceof Error ? error.message : 'An unexpected error occurred', { id: toastId })
    }
  }

  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle={
        <>
          Don&apos;t have an account?{' '}
          <Link
              href="/register"
              className="underline underline-offset-4 hover:text-neutral-400"
          >
              Sign up
          </Link>
        </>
      }
    >
      <AuthForm type="login" action={handleLogin} />
    </AuthLayout>
  )
}
