/**
 * @author Remco Stoeten
 * @description SessionIndicator component to display the authentication status
 * @param {SessionIndicatorProps} props - Component props
 * @returns {JSX.Element} JSX element representing the SessionIndicator component
 */

'use client'

import { useAuth } from '@/features/auth/providers/auth-provider'
import { cn } from '@/shared/helpers/utils'


type SessionIndicatorProps = {
    className?: string
}

export default function SessionIndicator({ className }: SessionIndicatorProps) {
    const { user } = useAuth()
    const isActive = !!user

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div
                className={cn(
                    'h-2 w-2 rounded-full',
                    isActive ? 'bg-green-500' : 'bg-red-500',
                    'animate-pulse'
                )}
            />
            <span className="text-xs text-muted-foreground">
                {isActive ? 'Session Active' : 'Not Authenticated'}
            </span>
        </div>
    )
} 
