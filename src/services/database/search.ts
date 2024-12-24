/**
 * @author Remco Stoeten
 * @description Database service layer for search functionality.
 * Handles search operations through database client.
 */

import { db } from './client'
import type { Snippet } from './types'

export const searchDb = {
  searchSnippets: async (query: string, userId: string) => {
    const { data, error } = await db
      .from('snippets')
      .select('*')
      .eq('user_id', userId)
      .textSearch('search_vector', query)
      .order('updated_at', { ascending: false })
    
    if (error) throw error
    return data as Snippet[]
  }
} 
