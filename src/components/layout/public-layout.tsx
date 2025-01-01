import { Navigate, Outlet } from '@tanstack/react-router'
import Header from './header'
import { useAuth } from '../../features/auth/contexts/auth-context'
import { dashboardRoute } from '../../router/routes'

export default function PublicLayout() {
  const { user } = useAuth()

  // If user is logged in, redirect to dashboard
  if (user) {
    return <Navigate to={dashboardRoute.to} />
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
} 
