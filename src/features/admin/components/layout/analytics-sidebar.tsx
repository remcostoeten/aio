import { Link } from '@tanstack/react-router'
import { 
  LineChart,
  BarChart3,
  Users,
  Clock,
  Tag
} from 'lucide-react'
import { UserMenu } from './user-menu'

const navItems = [
  {
    icon: <LineChart className="h-4 w-4" />,
    label: 'Trends',
    to: '/admin/analytics/trends'
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    label: 'Popular Searches',
    to: '/admin/analytics/popular'
  },
  {
    icon: <Users className="h-4 w-4" />,
    label: 'User Activity',
    to: '/admin/analytics/users'
  },
  {
    icon: <Clock className="h-4 w-4" />,
    label: 'Real-time',
    to: '/admin/analytics/realtime'
  },
  {
    icon: <Tag className="h-4 w-4" />,
    label: 'Tags',
    to: '/admin/analytics/tags'
  }
]

export function AnalyticsSidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(item => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
              "hover:bg-secondary transition-colors",
              "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User Menu */}
      <div className="p-4 border-t">
        <UserMenu />
      </div>
    </div>
  )
} 
