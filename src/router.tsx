/**
 * @fileoverview Main router configuration that combines all route trees.
 * This is the entry point for the application's routing system.
 */

'use client'

import { Router } from '@tanstack/react-router'
import { rootRoute } from './routes/root-route'
import { publicRouteTree } from './routes/public-routes'
import { authRouteTree } from './routes/auth-routes'
import { protectedRouteTree } from './routes/protected-routes'

/**
 * Combined route tree containing all application routes.
 * Merges public, auth, and protected routes under the root route.
 */
const routeTree = rootRoute.addChildren([
  ...publicRouteTree,
  ...authRouteTree,
  ...protectedRouteTree,
])

/**
 * The application router instance.
 * @type {Router}
 */
export const router = new Router({
  routeTree,
  context: {
    isAuthenticated: false,
    user: null,
  },
  defaultPreloadStaleTime: 0,
  defaultPreload: false,
  defaultPendingMinMs: 1000,
  defaultPendingComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  ),
  defaultErrorComponent: ({ error }) => {
    console.error('Router error:', error)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-red-800">Navigation Error</h2>
          <p className="text-red-600">
            {error instanceof Error ? error.message : 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    )
  },
})

/**
 * Type declaration merging for TanStack Router.
 * Ensures proper typing for the router throughout the application.
 */
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
