import { supabase } from 'db'
import type { SearchResult } from '../types'

export type SearchAnalytics = {
  id: string
  query: string
  resultCount: number
  selectedResult?: {
    id: string
    type: SearchResult['type']
    position: number
  }
  duration: number
  timestamp: string
  userId: string
}

export const searchAnalyticsDb = {
  // Track search query
  trackSearch: async (data: Omit<SearchAnalytics, 'id' | 'timestamp'>) => {
    const { error } = await db
      .from('search_analytics')
      .insert({
        ...data,
        timestamp: new Date().toISOString()
      })
    if (error) throw error
  },

  // Get popular searches
  getPopularSearches: async () => {
    const { data, error } = await db
      .from('search_analytics')
      .select('query, count(*)')
      .group('query')
      .order('count', { ascending: false })
      .limit(10)

    if (error) throw error
    return data
  },

  // Get click-through rate
  getClickThroughRate: async () => {
    const { data, error } = await db
      .from('search_analytics')
      .select('*')
      .not('selectedResult', 'is', null)

    if (error) throw error
    return data.length / await getTotalSearches()
  }
}
