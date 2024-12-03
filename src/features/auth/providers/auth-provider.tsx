/**
 * @author Remco Stoeten
 * @description Authentication loading wrapper
 */

'use client'

import { Loader } from 'lucide-react'
import { useAuthStore } from '../stores/auth-store'

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { loading } = useAuthStore()

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center">
                <Loader className="h-6 w-6 animate-spin" />
            </div>
        )
    }

    return <>{children}</>
}

// Re-export the store hook for convenience
export const useAuth = useAuthStore
