import { useQuery } from '@tanstack/react-query'
import { snippetDb } from '@/services/database/snippets'
import type { Snippet } from '@/services/database/types'

export const useSnippets = (userId: string) => {
  return useQuery({
    queryKey: ['snippets', userId],
    queryFn: () => snippetDb.list(userId)
  })
}

export const useSnippet = (id: string) => {
  return useQuery({
    queryKey: ['snippets', id],
    queryFn: () => snippetDb.getById(id)
  })
} 
