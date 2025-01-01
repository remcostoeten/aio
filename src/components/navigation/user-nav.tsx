import { User, LogOut, Settings } from 'lucide-react'
import { useAuth } from '../../features/auth/contexts/auth-context'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Link } from '@tanstack/react-router'

export function UserNav() {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <DropdownMenu
      trigger={
        <button className="inline-flex items-center justify-center rounded-md text-sm transition-colors hover:bg-surface focus:bg-surface h-9 px-2">
          <User className="h-5 w-5" />
        </button>
      }
    >
      <div className="px-2 py-1.5 text-sm font-semibold">{user.email}</div>
      <div className="h-px my-1 bg-border" />
      <Link
        to="/settings"
        className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-surface transition-colors"
      >
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </Link>
      <button
        onClick={() => signOut()}
        className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-surface transition-colors"
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </button>
    </DropdownMenu>
  )
}