import { useRouter } from '@tanstack/react-router'
import { useCreateFolder } from '../api/mutations'
import { FolderTree } from '../components'
import { foldersRoute } from '../routes'
import { useMemo } from 'react'
import { sortFolders } from '../utils'
import { Outlet } from '@tanstack/router-core'

export function FolderView() {
  const router = useRouter()
  const { 
    loaderData: { folders },
    search 
  } = router.useMatch(foldersRoute.id)
  
  const createFolder = useCreateFolder()
  const sortedFolders = useMemo(() => 
    sortFolders(folders, search.sort), 
    [folders, search.sort]
  )

  return (
    <div className="grid grid-cols-[250px_1fr] gap-4">
      <aside>
        <FolderTree 
          folders={sortedFolders}
          onSelect={(id) => {
            router.navigate({
              to: '/folders/$folderId',
              params: { folderId: id },
              search: { sort: search.sort, filter: search.filter }
            })
          }}
        />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
} 
