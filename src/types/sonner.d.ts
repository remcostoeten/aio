declare module 'sonner' {
    export interface ToastT {
        title: string
        description?: string
        duration?: number
    }

    export type Toast = (title: string, options?: Partial<ToastT>) => void

    export const toast: Toast & {
        success: Toast
        error: Toast
        warning: Toast
    }

    export function Toaster(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element
} 
