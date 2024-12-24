import { Breadcrumbs } from '@/shared/components/ui'
import { SearchBar } from '@/features/search'

type DashboardHeaderProps = {
  breadcrumbs?: React.ReactNode
  search?: {
    placeholder?: string
    onSearch: (query: string) => void
  }
}

export function DashboardHeader({ breadcrumbs, search }: DashboardHeaderProps) {
  return (
    <header className="border-b p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {breadcrumbs}
      </div>
      {search && (
        <div className="w-96">
          <SearchBar 
            placeholder={search.placeholder}
            onSearch={search.onSearch}
          />
        </div>
      )}
    </header>
  )
} 
