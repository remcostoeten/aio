/**
 * @author Remco Stoeten
 * @description React Query mutation for deleting a folder.
 * Provides reactive data mutation for folder deletion.
 */

import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from '@tanstack/react-query'
import { folderDb } from '@/services/database/folders'

export const useDeleteFolder = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (id: string) => folderDb.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] }   )
    }
  })
} 
