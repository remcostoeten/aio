import { Badge } from '@/shared/components/ui'
import type { Snippet } from '@/services/supabase/types'

type SnippetCardProps = {
  snippet: Snippet
  onClick: () => void
}

export const SnippetCard = ({ snippet, onClick }: SnippetCardProps) => {
  return (
    <div
      className={cn(
        "p-3 rounded-lg cursor-pointer",
        "hover:bg-secondary/50"
      )}
      onClick={onClick}
    >
      <h3>{snippet.title}</h3>
      <div className="flex gap-1">
        <Badge>{snippet.language}</Badge>
        {snippet.labels.map(label => (
          <Badge key={label} variant="outline">{label}</Badge>
        ))}
      </div>
    </div>
  )
} 
