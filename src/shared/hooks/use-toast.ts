/**
 * @author Remco Stoeten
 * @description Toast hook using Sonner
 */

import { toast as sonnerToast } from 'sonner'

type ToastProps = {
    title: string
    description?: string
    variant?: 'default' | 'success' | 'error' | 'warning'
}

export function useToast() {
    const showToast = ({ title, description, variant = 'default' }: ToastProps) => {
        switch (variant) {
            case 'success':
                sonnerToast.success(title, { description })
                break
            case 'error':
                sonnerToast.error(title, { description })
                break
            case 'warning':
                sonnerToast.warning(title, { description })
                break
            default:
                sonnerToast(title, { description })
        }
    }

    return { toast: showToast }
} 
