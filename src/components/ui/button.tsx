import type { ComponentProps } from 'react'
import { cn } from '../../lib/utils'

export function Button({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand',
        'disabled:pointer-events-none disabled:opacity-50',
        'bg-brand text-white hover:bg-brand-dark active:bg-brand-darker',
        'h-9 px-4 py-2',
        className
      )}
      {...props}
    />
  )
}