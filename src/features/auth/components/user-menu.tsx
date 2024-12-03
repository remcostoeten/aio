/**
 * @author Remco Stoeten
 * @description User menu with authentication actions
 */

'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'ui'
import { useAuth } from '../providers/auth-provider'

export default function UserMenu() {
    const router = useRouter()
    const { user, profile, logout, isAdmin } = useAuth()

    if (!user) {
        return (
            <div className="flex gap-4">
                <Button onClick={() => router.push('/auth/login')}>
                    Login
                </Button>
                <Button onClick={() => router.push('/auth/register')} variant="outline">
                    Register
                </Button>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-4">
            <div className="text-sm">
                <p className="font-medium">
                    {profile?.firstName} {profile?.lastName}
                </p>
                <p className="text-muted-foreground">
                    {user.email}
                </p>
            </div>
            <div className="flex gap-2">
                {isAdmin() && (
                    <Button onClick={() => router.push('/admin')} variant="outline">
                        Admin
                    </Button>
                )}
                <Button onClick={() => router.push('/profile')} variant="outline">
                    Profile
                </Button>
                <Button onClick={() => {
                    logout()
                    router.push('/auth/login')
                }}>
                    Logout
                </Button>
            </div>
        </div>
    )
} 
