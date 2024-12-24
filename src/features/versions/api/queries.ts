import { useQuery } from '@tanstack/react-query'
import { versionDb } from '@/services/database/versions'

export const useSnippetVersions = (snippetId: string) => {
  return useQuery({
    queryKey: ['versions', snippetId],
    queryFn: () => versionDb.listForSnippet(snippetId)
  })
} 
