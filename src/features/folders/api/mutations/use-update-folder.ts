/**
 * @author Remco Stoeten
 * @description React Query mutation for updating a folder.
 * Provides reactive data mutation for folder update.
 */

import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from '@tanstack/react-query'
import { folderDb } from '@/services/database/folders'
import { UpdateFolderData } from '@/services/database/types'
export const useUpdateFolder = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateFolderData }) => 
      folderDb.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
    }
  })
}

