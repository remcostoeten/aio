/**
 * @fileoverview Public routes configuration for the application.
 * These routes are accessible to all users without authentication.
 */

import { createRoute } from '@tanstack/react-router'
import { RoadmapPage, ChangelogPage } from '../views'
import { rootRoute } from './root-route'
import RootPage from '../views/root'

/**
 * Collection of public routes accessible without authentication.
 * @type {Record<string, import('@tanstack/react-router').Route>}
 */
export const publicRoutes = {
  /** Home page route - lazily loaded */
  home: createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: RootPage
  }),

  /** Roadmap page route */
  roadmap: createRoute({
    getParentRoute: () => rootRoute,
    path: '/roadmap',
    component: RoadmapPage,
  }),

  /** Changelog page route */
  changelog: createRoute({
    getParentRoute: () => rootRoute,
    path: '/changelog',
    component: ChangelogPage,
  }),
}

/** Array of all public routes for router registration */
export const publicRouteTree = Object.values(publicRoutes) 
