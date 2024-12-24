/**
 * @author Remco Stoeten
 * @description React Query hooks for authentication-related queries.
 * Provides reactive data fetching for user authentication state.
 */

import { useQuery } from '@tanstack/react-query'
import { authDb } from '@/services/database/auth'

/**
 * Hook to fetch and subscribe to current user data
 * @returns {UseQueryResult<User>} Query result containing current user data
 */
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['auth', 'user'],
    queryFn: () => authDb.getCurrentUser(),
    staleTime: Infinity
  })
} 
