import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@/shared/components/ui'
import { useCurrentUser, useSignOut } from '@/features/auth'
import { Settings, LogOut, User } from 'lucide-react'

export function UserMenu() {
  const { data: user } = useCurrentUser()
  const signOut = useSignOut()

  if (!user) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-secondary">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar_url} />
          <AvatarFallback>
            {user.email?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-left">
          <p className="text-sm font-medium">{user.email}</p>
          <p className="text-xs text-muted-foreground">Admin</p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <User className="h-4 w-4 mr-2" />
          Profile
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => signOut.mutate()}
          className="text-red-600"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
