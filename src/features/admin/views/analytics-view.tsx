import { useQuery } from '@tanstack/react-query'
import { searchAnalyticsDb } from '@/features/search/api/analytics'
import { AnalyticsCard } from '../components/analytics-card'
import { SearchTrendsChart, PopularSearchesChart } from '../components/charts'
import { DashboardLayout } from '../components/layout/dashboard-layout'
import { AnalyticsSidebar } from '../components/layout/admin-sidebar'
import { AnalyticsDetails } from '../components/layout/admin-details'
import { AnalyticsBreadcrumbs } from '../components/layout/admin-breadcrumbs'
import { Search } from 'lucide-react'

export function AnalyticsView() {
  const { data: popularSearches } = useQuery({
    queryKey: ['analytics', 'popular-searches'],
    queryFn: searchAnalyticsDb.getPopularSearches
  })

  return (
    <DashboardLayout
      sidebar={<AnalyticsSidebar />}
      rightPanel={<AnalyticsDetails />}
      showRightPanel={true}
      breadcrumbs={<AnalyticsBreadcrumbs />}
      search={{
        placeholder: "Search analytics...",
        onSearch: handleSearch
      }}
    >
      <div className="space-y-6">
        {/* Analytics content */}
        <div className="grid grid-cols-3 gap-4">
          <AnalyticsCard
            title="Total Searches"
            value={popularSearches?.length ?? 0}
            icon={<Search className="h-4 w-4" />}
          />
          {/* More cards... */}
        </div>
      </div>
    </DashboardLayout>
  )
} 
