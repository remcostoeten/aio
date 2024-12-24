import { cn } from '@/shared/helpers'
import { ChevronRight, Folder } from 'lucide-react'
import type { Folder as FolderType } from '@/services/database/types'

type FolderTreeProps = {
  folders: FolderType[]
  selectedId?: string
  onSelect: (id: string) => void
}

export function FolderTree({ folders, selectedId, onSelect }: FolderTreeProps) {
  const rootFolders = folders.filter(f => !f.parent_id)
  const getChildren = (parentId: string) => folders.filter(f => f.parent_id === parentId)

  const renderFolder = (folder: FolderType) => {
    const children = getChildren(folder.id)
    const isSelected = folder.id === selectedId
    
    return (
      <div key={folder.id} className="space-y-1">
        <button
          onClick={() => onSelect(folder.id)}
          className={cn(
            "flex items-center w-full gap-2 p-2 rounded-lg",
            "hover:bg-secondary/50",
            isSelected && "bg-secondary"
          )}
        >
          <ChevronRight className="h-4 w-4" />
          <Folder className="h-4 w-4" />
          <span>{folder.name}</span>
        </button>
        
        {children.length > 0 && (
          <div className="pl-4 space-y-1">
            {children.map(renderFolder)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {rootFolders.map(renderFolder)}
    </div>
  )
} 
