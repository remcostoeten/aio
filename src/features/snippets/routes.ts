import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { SnippetsView } from './views/snippets-view'
import { SnippetDetailView } from './views/snippet-detail-view'
import { authDb } from '@/services/database/auth'
import { snippetDb } from '@/services/database/snippets'

// List route
export const snippetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'snippets',
  component: SnippetsView,
  loader: async () => {
    const user = await authDb.getCurrentUser()
    return { snippets: await snippetDb.list(user.id) }
  }
})

// Detail route
export const snippetRoute = createRoute({
  getParentRoute: () => snippetsRoute,
  path: '$snippetId',
  component: SnippetDetailView,
  loader: async ({ params: { snippetId } }) => {
    return { snippet: await snippetDb.getById(snippetId) }
  }
})

export const snippetRoutes = [snippetsRoute, snippetRoute]
