/**
 * @fileoverview Root route configuration for the application.
 * This file defines the base route structure that all other routes will extend from.
 */

import { Outlet, createRootRoute } from '@tanstack/react-router'

/**
 * The root route of the application.
 * Serves as the parent route for all other routes and provides the base layout via Outlet.
 * @type {import('@tanstack/react-router').RootRoute}
 */
export const rootRoute = createRootRoute({
  component: () => <Outlet />,
}) 
