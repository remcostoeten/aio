import { useMutation, useQueryClient } from '@tanstack/react-query'
import { snippetDb } from '@/services/database/snippets'
import type { CreateSnippetData, UpdateSnippetData } from '@/services/database/types'

export const useCreateSnippet = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: CreateSnippetData) => snippetDb.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['snippets'])
    }
  })
}

export const useUpdateSnippet = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSnippetData }) => 
      snippetDb.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries(['snippets', id])
      queryClient.invalidateQueries(['snippets'])
    }
  })
} 
