/**
 * @author Remco Stoeten
 * @description React Query hooks for search-related queries.
 * Provides reactive data fetching for search functionality.
 */

import { useQuery } from '@tanstack/react-query'
import { searchDb } from '@/services/database/search'

export const useSearchSnippets = (query: string, userId: string) => {
  return useQuery({
    queryKey: ['search', query, userId],
    queryFn: () => searchDb.searchSnippets(query, userId),
    enabled: query.length > 0
  })
} 
