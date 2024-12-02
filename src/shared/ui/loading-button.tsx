/**
 * @author Remco Stoeten
 * @description Button component with loading state
 */

'use client'

import { Loader2 } from 'lucide-react'
import type { ButtonProps } from './button'
import { Button } from './button'

type LoadingButtonProps = ButtonProps & {
    isLoading?: boolean
    loadingText?: string
}

export default function LoadingButton({
    children,
    isLoading,
    loadingText,
    disabled,
    ...props
}: LoadingButtonProps) {
    return (
        <Button
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {loadingText || 'Loading...'}
                </>
            ) : children}
        </Button>
    )
} 
