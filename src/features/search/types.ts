export type SearchResult = {
  id: string
  type: 'snippet' | 'folder' | 'action' | 'route'
  title: string
  description?: string
  url?: string
  icon?: React.ReactNode
  action?: () => void
  keywords?: string[]
}

export type SearchIndex = {
  routes: SearchResult[]
  snippets: SearchResult[]
  actions: SearchResult[]
} 
