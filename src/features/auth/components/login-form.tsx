/**
 * @author Remco Stoeten
 * @description Login form component
 */

'use client'

import { Button, Input } from '@/shared/ui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { login } from '../services/auth-service'

export default function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        const result = await login(data)

        if ('error' in result) {
            toast.error('Login failed', {
                description: result.error.message
            })
        } else {
            toast.success('Login successful', {
                description: 'Welcome back!'
            })
            router.push('/dashboard')
        }

        setIsLoading(false)
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={isLoading}
                    className="w-full bg-[#2D2D2D] border-gray-700 text-white placeholder:text-gray-500"
                />
            </div>
            <div className="space-y-1">
                <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm text-gray-400">Password</label>
                    <Link href="/auth/forgot-password" className="text-sm text-gray-400 hover:text-white">
                        Forgot Password?
                    </Link>
                </div>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                    className="w-full bg-[#2D2D2D] border-gray-700 text-white placeholder:text-gray-500"
                />
            </div>
            <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
            >
                {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
        </form>
    )
} 
