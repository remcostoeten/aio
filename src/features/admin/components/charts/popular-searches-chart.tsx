import { Bar } from 'react-chartjs-2'

type PopularSearchesProps = {
  data: { query: string; count: number }[]
}

export function PopularSearchesChart({ data }: PopularSearchesProps) {
  const chartData = useMemo(() => ({
    labels: data.map(d => d.query),
    datasets: [{
      label: 'Search Count',
      data: data.map(d => d.count),
      backgroundColor: 'rgb(99, 102, 241)',
      borderRadius: 4
    }]
  }), [data])

  return (
    <Bar 
      data={chartData}
      options={{
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  )
} 
