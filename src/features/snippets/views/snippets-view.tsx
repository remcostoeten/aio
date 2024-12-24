import { useRoute, router } from '@tanstack/react-router'
import { SnippetCard } from '../components/snippet-card'

export function SnippetsView() {
  const { loaderData: { snippets } } = useRoute()

  return (
    <div className="space-y-4">
      {snippets.map(snippet => (
        <SnippetCard 
          key={snippet.id} 
          snippet={snippet}
          onClick={() => router.navigate({
            to: '/snippets/$snippetId',
            params: { snippetId: snippet.id }
          })}
        />
      ))}
    </div>
  )
} 
