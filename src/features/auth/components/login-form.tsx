/**
 * @author Remco Stoeten
 * @description Login form component
 */

'use client'

import { useRouter } from 'next/navigation'
import { Button, Input } from 'ui'
import { useAuth } from '../providers/auth-provider'

export default function LoginForm() {
    const router = useRouter()
    const { login } = useAuth()

    async function onSubmit(formData: FormData) {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        await login(data)
        router.push('/dashboard')
    }

    return (
        <form action={onSubmit} className="space-y-4">
            <Input
                name="email"
                type="email"
                placeholder="Email"
                required
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                required
            />
            <Button type="submit" className="w-full">
                Login
            </Button>
        </form>
    )
} 
