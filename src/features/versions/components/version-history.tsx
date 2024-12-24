import { format } from 'date-fns'
import type { SnippetVersion } from '@/services/database/types'

type VersionHistoryProps = {
  versions: SnippetVersion[]
  onSelect: (version: SnippetVersion) => void
}

export function VersionHistory({ versions, onSelect }: VersionHistoryProps) {
  return (
    <div className="space-y-2">
      {versions.map(version => (
        <button
          key={version.id}
          onClick={() => onSelect(version)}
          className="w-full p-2 text-left hover:bg-secondary/50 rounded-lg"
        >
          <div className="text-sm">{version.message || 'No message'}</div>
          <div className="text-xs text-muted-foreground">
            {format(new Date(version.created_at), 'MMM d, yyyy h:mm a')}
          </div>
        </button>
      ))}
    </div>
  )
}
