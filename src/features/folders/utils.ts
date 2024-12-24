import type { Folder } from '@/services/database/types'

export const sortFolders = (folders: Folder[], sort: string = 'name') => {
  return [...folders].sort((a, b) => {
    switch (sort) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'created':
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      case 'updated':
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      default:
        return 0
    }
  })
} 
