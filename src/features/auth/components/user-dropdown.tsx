'use client'

import { useAuth } from '@/features/auth/providers/auth-provider'
import { cn } from '@/shared/helpers/utils'
import { LogOut, Settings, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from 'ui'

export default function UserDropdown() {
    const { user, profile, logout } = useAuth()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    if (!user || !profile) return null

    async function handleLogout() {
        await logout()
        router.push('/auth/login')
    }

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="outline-none">
                <div className="relative h-10 w-10 rounded-full ring-2 ring-offset-2 ring-offset-background transition-all hover:ring-primary/70">
                    <Image
                        src={profile.avatarUrl || 'https://github.com/remcostoeten.png'}
                        alt={`${profile.firstName} ${profile.lastName}`}
                        className={cn(
                            'h-full w-full rounded-full object-cover transition-opacity',
                            isOpen ? 'opacity-80' : 'opacity-100'
                        )}
                        fill
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                align="end"
                sideOffset={8}
            >
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">
                            {profile.firstName} {profile.lastName}
                        </p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem >
                        <Link href="/profile">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link href="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-500 focus:text-red-500"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
