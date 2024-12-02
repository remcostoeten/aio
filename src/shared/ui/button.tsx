/**
 * @author Remco Stoeten
 * @description Button component
 */

import { cn } from '@/shared/helpers/utils'
import * as React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'destructive' | 'outline'
	size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = 'default', size = 'default', ...props }, ref) => {
		return (
			<button
				className={cn(
					'inline-flex items-center justify-center rounded-md font-medium transition-colors',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
					'disabled:opacity-50 disabled:pointer-events-none',
					{
						'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
						'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
						'border border-input bg-background hover:bg-accent hover:text-accent-foreground': variant === 'outline',
						'h-10 px-4 py-2': size === 'default',
						'h-9 px-3': size === 'sm',
						'h-11 px-8': size === 'lg',
					},
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button }
