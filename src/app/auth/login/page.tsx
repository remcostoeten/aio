/**
 * @author Remco Stoeten
 * @description Login page
 */

import AuthForm from '@/features/auth/components/auth-form'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                <p className="text-sm text-muted-foreground">
                    Sign in to your account
                </p>
            </div>
            <AuthForm type="login" />
            <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register" className="text-primary hover:underline">
                    Create one
                </Link>
            </div>
        </div>
    )
}
