import { Router, Route, RootRoute, redirect, Outlet } from '@tanstack/react-router'
import { AuthPage } from './views/auth-page'
import { Dashboard } from './views/dashboard-page'
import { ProtectedRoute } from './features/auth/components/protected-route'
import { getDatabaseClient } from './api/clients/database-client'
import { createAuthService } from './api/services/auth-service'

const authService = createAuthService(getDatabaseClient())

async function protectedLoader() {
  const user = await authService.getCurrentUser()
  if (!user) {
    throw redirect({
      to: '/signin'
    })
  }
  return { user }
}

const rootRoute = new RootRoute({
  component: () => <Outlet />
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: protectedLoader,
  component: Dashboard
})

const signInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/signin',
  component: () => <AuthPage mode="signin" />
})

const signUpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: () => <AuthPage mode="signup" />
})

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  loader: protectedLoader,
  component: Dashboard
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  signInRoute,
  signUpRoute,
  dashboardRoute,
])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}