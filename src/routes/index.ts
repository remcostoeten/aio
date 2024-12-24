import { createRouter, createRoute, redirect } from '@tanstack/react-router'
import { rootRoute } from './root'
import { authRoutes } from '@/features/auth/routes'
import { folderRoutes } from '@/features/folders/routes'
import { snippetRoutes } from '@/features/snippets/routes'

// Add a default index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/snippets' })
  }
})

const routeTree = rootRoute.addChildren([
  indexRoute, // Add the index route
  ...authRoutes,
  ...folderRoutes,
  ...snippetRoutes
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 
