import { inferRouteParams, inferSearchParams } from '@tanstack/react-router'
import { foldersRoute, folderRoute } from '@/features/folders/routes'

// Route params type inference
export type FoldersSearchParams = inferSearchParams<typeof foldersRoute>
export type FolderParams = inferRouteParams<typeof folderRoute>

// Example usage in components:
function FoldersView() {
  const { sort, filter } = useSearch<FoldersSearchParams>()
} 
