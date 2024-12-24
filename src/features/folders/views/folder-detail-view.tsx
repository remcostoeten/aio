import { useRoute, router } from '@tanstack/react-router'
import { SnippetCard } from '@/features/snippets/components/snippet-card'
import { Button } from '@/shared/components/ui'
import { Plus } from 'lucide-react'

export function FolderDetailView() {
  const { loaderData: { folder, snippets } } = useRoute()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {folder.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            {snippets.length} snippets
          </p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Snippet
        </Button>
      </div>

      {/* Snippets Grid */}
      <div className="grid grid-cols-2 gap-4">
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
    </div>
  )
} 
