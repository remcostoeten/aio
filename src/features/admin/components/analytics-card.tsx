type AnalyticsCardProps = {
  title: string
  value: string | number
  change?: number
  icon?: React.ReactNode
}

export function AnalyticsCard({ title, value, change, icon }: AnalyticsCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        {icon}
      </div>
      <div className="mt-2 flex items-baseline">
        <h3 className="text-2xl font-semibold">{value}</h3>
        {change && (
          <span className={cn(
            "ml-2 text-sm",
            change > 0 ? "text-green-600" : "text-red-600"
          )}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>
    </div>
  )
} 
