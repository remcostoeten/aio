/**
 * @author Remco Stoeten
 * @description React Query mutation for creating a folder.
 * Provides reactive data mutation for folder creation.
 */

import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from '@tanstack/react-query'
import { folderDb } from '@/services/database/folders'
import { CreateFolderData } from '@/services/database/types'

export const useCreateFolder = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (data: CreateFolderData) => folderDb.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
    }
  })
}

