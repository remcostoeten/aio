/**
 * @author Remco Stoeten
 * @description Registration page
 */

import AuthForm from '@/features/auth/components/auth-form'
import Link from 'next/link'

export default function RegisterPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your details to get started
                </p>
            </div>
            <AuthForm type="register" />
            <div className="text-center text-sm">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-primary hover:underline">
                    Sign in
                </Link>
            </div>
        </div>
    )
} 
