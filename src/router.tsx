/**
 * @fileoverview Main router configuration that combines all route trees.
 * This is the entry point for the application's routing system.
 */

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
export const router = new Router({ routeTree })

/**
 * Type declaration merging for TanStack Router.
 * Ensures proper typing for the router throughout the application.
 */
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
