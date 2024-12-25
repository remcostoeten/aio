/**
 * @author Remco Stoeten
 * @description Root router configuration using TanStack Router
 */

import { createRouter } from '@tanstack/react-router'
import { rootRoute } from './root'
import { authRoutes } from '@/features/auth/routes'
import { snippetRoutes } from '@/features/snippets/routes'
import { adminRoutes } from '@/features/admin/routes'

export const routeTree = rootRoute.addChildren([
  ...authRoutes,
  ...snippetRoutes,
  ...adminRoutes,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 
