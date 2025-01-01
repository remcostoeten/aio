import { Link } from '@tanstack/react-router'
import { cn } from '../../lib/utils'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ to, children, className }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'transition-colors hover:text-foreground/80 text-foreground/60',
        className
      )}
    >
      {children}
    </Link>
  )
}