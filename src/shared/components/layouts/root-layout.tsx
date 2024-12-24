import { useCurrentUser } from '@/features/auth'
import { UserMenu } from '@/features/auth/components'
import { Outlet } from '@tanstack/react-router'

export function RootLayout() {
  const { data: user } = useCurrentUser()

  // If no user, let the auth routes handle it
  if (!user) return <Outlet />

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div>Logo</div>
          <UserMenu user={user} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <Outlet />
      </main>
    </div>
  )
} 
