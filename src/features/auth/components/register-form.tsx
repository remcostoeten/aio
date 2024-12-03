/**
 * @author Remco Stoeten
 * @description Registration form component
 */

'use client'

import { Button, Input } from 'ui'
import { useAuth } from '../providers/auth-provider'

export default function RegisterForm() {
    const { register } = useAuth()

    async function onSubmit(formData: FormData) {
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string
        }

        await register(data)
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
            <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
            />
            <Button type="submit" className="w-full">
                Register
            </Button>
        </form>
    )
} 
