import { Line } from 'react-chartjs-2'
import { format } from 'date-fns'
import type { SearchAnalytics } from '@/features/search/api/analytics'

type SearchTrendsProps = {
  data: SearchAnalytics[]
}

export function SearchTrendsChart({ data }: SearchTrendsProps) {
  const chartData = useMemo(() => {
    const grouped = groupBy(data, d => 
      format(new Date(d.timestamp), 'yyyy-MM-dd')
    )
    
    const dates = Object.keys(grouped).sort()
    const searches = dates.map(date => grouped[date].length)
    const clicks = dates.map(date => 
      grouped[date].filter(d => d.selectedResult).length
    )

    return {
      labels: dates.map(d => format(new Date(d), 'MMM d')),
      datasets: [
        {
          label: 'Searches',
          data: searches,
          borderColor: 'rgb(99, 102, 241)',
          tension: 0.3
        },
        {
          label: 'Clicks',
          data: clicks,
          borderColor: 'rgb(34, 197, 94)',
          tension: 0.3
        }
      ]
    }
  }, [data])

  return (
    <Line 
      data={chartData}
      options={{
        responsive: true,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        }
      }}
    />
  )
} 
