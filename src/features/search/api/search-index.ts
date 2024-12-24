import { router } from '@/routes'
import { snippetDb } from '@/services/database/snippets'

export const createSearchIndex = async (userId: string): Promise<SearchIndex> => {
  // Index routes
  const routes: SearchResult[] = router.routes.map(route => ({
    id: route.path,
    type: 'route',
    title: route.path,
    url: route.path,
    icon: <NavigationIcon />,
    keywords: [route.path, route.id]
  }))

  // Index snippets
  const snippets = await snippetDb.list(userId)
  const snippetResults: SearchResult[] = snippets.map(snippet => ({
    id: snippet.id,
    type: 'snippet',
    title: snippet.title,
    description: truncate(snippet.content, 100),
    url: `/snippets/${snippet.id}`,
    icon: <CodeIcon />,
    keywords: [
      snippet.title,
      snippet.language,
      ...snippet.labels
    ]
  }))

  // Index actions
  const actions: SearchResult[] = [
    {
      id: 'create-snippet',
      type: 'action',
      title: 'Create New Snippet',
      icon: <PlusIcon />,
      action: () => router.navigate('/snippets/new'),
      keywords: ['new', 'create', 'snippet', 'add']
    },
    {
      id: 'create-folder',
      type: 'action',
      title: 'Create New Folder',
      icon: <FolderPlusIcon />,
      action: () => router.navigate('/folders/new'),
      keywords: ['new', 'create', 'folder']
    }
  ]

  return {
    routes,
    snippets: snippetResults,
    actions
  }
} 
