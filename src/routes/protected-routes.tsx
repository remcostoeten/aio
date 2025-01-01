/**
 * @fileoverview Protected routes configuration for the application.
 * These routes require authentication to access and are protected by an auth loader.
 */

import { createRoute, redirect } from '@tanstack/react-router'
import { rootRoute } from './root-route'
import { getDatabaseClient } from '../api/clients/database-client'
import { createAuthService } from '../api/services/auth-service'
import DashboardPage from '../views/dashboard-page'

const authService = createAuthService(getDatabaseClient())

/**
 * Loader function to protect routes from unauthorized access.
 * Redirects to signin if user is not authenticated.
 * @async
 * @returns {Promise<{ user: any }>} The current user object if authenticated
 * @throws {Redirect} Redirects to signin page if not authenticated
 */
async function protectedLoader() {
  const user = await authService.getCurrentUser()
  if (!user) {
    throw redirect({
      to: '/signin',
      search: { redirect: window.location.pathname },
    })
  }
  return { user }
}

/**
 * Collection of protected routes that require authentication.
 * Each route uses the protectedLoader to ensure authentication.
 * @type {Record<string, import('@tanstack/react-router').Route>}
 */
export const protectedRoutes = {
  /** Dashboard page route - requires authentication */
  dashboard: createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    loader: protectedLoader,
    component: DashboardPage,
  }),
  // Add more protected routes here as needed
  // Example:
  // settings: createRoute({
  //   getParentRoute: () => rootRoute,
  //   path: '/settings',
  //   loader: protectedLoader,
  //   component: SettingsPage,
  // }),
}

/** Array of all protected routes for router registration */
export const protectedRouteTree = Object.values(protectedRoutes) 
