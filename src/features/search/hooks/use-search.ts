import { useQuery, useMutation } from '@tanstack/react-query'
import Fuse from 'fuse.js'
import { createSearchIndex } from '../api/search-index'
import type { SearchResult } from '../types'
import { useRef, useEffect } from 'react'
import { searchAnalyticsDb } from '../api/analytics'

export const useSearch = (query: string) => {
  const startTime = useRef(Date.now())
  const analyticsTracker = useMutation({
    mutationFn: searchAnalyticsDb.trackSearch
  })

  // Get search index
  const { data: searchIndex } = useQuery({
    queryKey: ['search-index'],
    queryFn: () => createSearchIndex(userId),
    staleTime: 1000 * 60 * 5 // 5 minutes
  })

  // Combine all results
  const allResults = [
    ...(searchIndex?.routes ?? []),
    ...(searchIndex?.snippets ?? []),
    ...(searchIndex?.actions ?? [])
  ]

  // Setup fuzzy search
  const fuse = new Fuse(allResults, {
    keys: ['title', 'description', 'keywords'],
    threshold: 0.3,
    includeMatches: true
  })

  // Return search results
  const results = query 
    ? fuse.search(query).map(result => result.item)
    : []

  // Track search when query changes
  useEffect(() => {
    if (query) {
      const duration = Date.now() - startTime.current
      analyticsTracker.mutate({
        query,
        resultCount: results.length,
        duration,
        userId
      })
    }
    startTime.current = Date.now()
  }, [query])

  // Track result selection
  const trackSelection = (result: SearchResult, position: number) => {
    analyticsTracker.mutate({
      query,
      resultCount: results.length,
      duration: Date.now() - startTime.current,
      selectedResult: {
        id: result.id,
        type: result.type,
        position
      },
      userId
    })
  }

  return {
    results,
    trackSelection
  }
} 
