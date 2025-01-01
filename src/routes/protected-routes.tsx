/**
 * @fileoverview Protected routes configuration for the application.
 * These routes require authentication to access and are protected by an auth loader.
 */

'use client'

import { createRoute, redirect } from '@tanstack/react-router'
import { rootRoute } from './root-route'
import { getDatabaseClient } from '../api/clients/database-client'
import { createAuthService } from '../api/services/auth-service'
import DashboardPage from '../views/dashboard-page'

const authService = createAuthService(getDatabaseClient())

const protectedLoader = async () => {
  try {
    const user = await authService.getCurrentUser()
    if (!user) {
      throw redirect({
        to: '/signin',
        search: {
          redirect: window.location.pathname,
        },
      })
    }
    return { user }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Authentication failed')
  }
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
    beforeLoad: async () => {
      const { user } = await protectedLoader()
      return { user }
    },
    component: () => {
      return <DashboardPage />
    },
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
