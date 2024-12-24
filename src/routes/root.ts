import { createRootRoute, redirect } from '@tanstack/react-router'
import { RootLayout } from '@/shared/components/layouts'
import { authDb } from '@/services/database/auth'

export const rootRoute = createRootRoute({
  component: RootLayout,
  beforeLoad: async () => {
    const user = await authDb.getCurrentUser()
    if (!user && window.location.pathname !== '/login') {
      throw redirect({
        to: '/login',
        search: { redirect: window.location.pathname }
      })
    }
    return { user }
  }
}) 
