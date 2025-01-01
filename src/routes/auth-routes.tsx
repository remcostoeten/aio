/**
 * @fileoverview Authentication routes configuration for the application.
 * These routes handle user authentication flows like sign in, sign up, and password recovery.
 */

import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root-route'
import { AuthPage } from '../views/auth-page'

/**
 * Collection of authentication-related routes.
 * Each route renders the AuthPage component with a different mode.
 * @type {Record<string, import('@tanstack/react-router').Route>}
 */
export const authRoutes = {
  /** Sign in page route */
  signIn: createRoute({
    getParentRoute: () => rootRoute,
    path: '/signin',
    component: () => <AuthPage mode="signin" />,
  }),

  /** Sign up page route */
  signUp: createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: () => <AuthPage mode="signup" />,
  }),

  /** Password recovery page route */
  forgotPassword: createRoute({
    getParentRoute: () => rootRoute,
    path: '/forgot-password',
    component: () => <AuthPage mode="forgot-password" />,
  }),
}

/** Array of all authentication routes for router registration */
export const authRouteTree = Object.values(authRoutes) 
