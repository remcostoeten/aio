import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { folderDb } from '@/services/database/folders'
import { snippetDb } from '@/services/database/snippets'
import { FolderView } from './views/folder-view'
import { FolderDetailView } from './views/folder-detail-view'

export const foldersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'folders',
  component: FolderView,
  loader: async ({ params }: { params: any }) => {
    return { folders: await folderDb.list(params) }
  },
  validateSearch: (search: Record<string, unknown>) => ({
    sort: search.sort as string ?? 'name',
    filter: search.filter as string
  })
})

// Detail route
export const folderRoute = createRoute({
  getParentRoute: () => foldersRoute,
  path: '$folderId',
  component: FolderDetailView,
  loader: async ({ params: { folderId } }) => {
    const [folder, snippets] = await Promise.all([
      folderDb.getById(folderId),
      snippetDb.listByFolder(folderId)
    ])
    return { folder, snippets }
  }
})

export const folderRoutes = [foldersRoute, folderRoute] 
