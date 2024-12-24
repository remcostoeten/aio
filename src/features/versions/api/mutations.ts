/**
 * @author Remco Stoeten
 * @description React Query mutations for version-related operations.
 * Provides reactive data mutation for version creation.
 */

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { versionDb } from '@/services/database/versions'
import type { CreateVersionData } from '@/services/database/types'

export const useCreateVersion = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: CreateVersionData) => versionDb.create(data),
    onSuccess: (_, { snippet_id }) => {
      queryClient.invalidateQueries({ queryKey: ['versions', snippet_id] })
    }
  })
} 
