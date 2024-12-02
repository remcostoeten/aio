/**
 * @author Remco Stoeten
 * @description Registration form component
 */

'use client'

import { Button, Input } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { register } from '../services/auth-service'
import type { RegisterFormData } from '../types'

export default function RegisterForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const data: RegisterFormData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string
        }

        const result = await register(data)

        if ('error' in result) {
            toast.error('Registration failed', {
                description: result.error.message
            })
        } else {
            toast.success('Registration successful', {
                description: 'Redirecting to dashboard...'
            })
            localStorage.setItem('user', JSON.stringify(result.user))
            router.push('/dashboard')
        }

        setIsLoading(false)
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
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
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
            </Button>
        </form>
    )
} 
