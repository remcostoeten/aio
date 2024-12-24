import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { AdminLayout } from './components/layout'
import { AnalyticsView } from './views/analytics-view'
import { redirect } from '@tanstack/react-router'
import { authDb } from '@/services/database/auth'

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: AdminLayout,
  beforeLoad: async () => {
    const user = await authDb.getCurrentUser()
    if (user?.role !== 'admin') {
      throw redirect({ to: '/' })
    }
  }
})

export const analyticsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: 'analytics',
  component: AnalyticsView
}) 
