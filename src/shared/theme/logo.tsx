/**
 * @author Remco Stoeten
 * @description Logo component with animated variants
 */

import { cn } from '@/shared/helpers'

type LogoProps = {
  className?: string
  variant?: 'default' | 'small' | 'icon'
  animated?: boolean
}

export function Logo({ className, variant = 'default', animated = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        className={cn(
          'text-primary',
          variant === 'small' && 'w-6 h-6',
          variant === 'icon' && 'w-4 h-4',
          variant === 'default' && 'w-8 h-8'
        )}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={cn(animated && 'animate-draw')}
          d="M12 3L3 7.5L12 12L21 7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={cn(animated && 'animate-draw-delayed')}
          d="M3 16.5L12 21L21 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={cn(animated && 'animate-draw')}
          d="M3 12L12 16.5L21 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {variant !== 'icon' && (
        <span
          className={cn(
            'font-bold tracking-tight',
            variant === 'small' ? 'text-lg' : 'text-2xl'
          )}
        >
          DevTools
        </span>
      )}
    </div>
  )
} 
