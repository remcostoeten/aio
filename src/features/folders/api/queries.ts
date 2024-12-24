/**
 * @author Remco Stoeten
 * @description React Query query for fetching folders.
 * Provides reactive data fetching for folders.
 */

import { useQuery } from '@tanstack/react-query'
import { folderDb } from '@/services/database/folders'

export const useFolders = (userId: string) => {
  return useQuery({
    queryKey: ['folders', userId],
    queryFn: () => folderDb.list(userId)
  })
} 
