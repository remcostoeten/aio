/**
 * @author Remco Stoeten
 * @description Protected route component that requires authentication
 */

'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '../providers/auth-provider'

export default function ProtectedRoute({
    children,
    requireAdmin = false
}: {
    children: React.ReactNode
    requireAdmin?: boolean
}) {
    const router = useRouter()
    const { isAuthenticated, isAdmin, loading } = useAuth()

    useEffect(() => {
        if (!loading && !isAuthenticated()) {
            router.push('/auth/login')
            return
        }

        if (!loading && requireAdmin && !isAdmin()) {
            router.push('/dashboard')
        }
    }, [loading, isAuthenticated, isAdmin, requireAdmin, router])

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
            </div>
        )
    }

    return <>{children}</>
} 
