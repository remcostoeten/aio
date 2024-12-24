import { Link } from '@tanstack/react-router'
import { 
  BarChart, 
  Users, 
  Settings,
  Search,
  Database
} from 'lucide-react'

const navItems = [
  {
    icon: <BarChart className="h-5 w-5" />,
    label: 'Analytics',
    to: '/admin/analytics'
  },
  {
    icon: <Users className="h-5 w-5" />,
    label: 'Users',
    to: '/admin/users'
  },
  {
    icon: <Search className="h-5 w-5" />,
    label: 'Search',
    to: '/admin/search'
  },
  {
    icon: <Database className="h-5 w-5" />,
    label: 'Data',
    to: '/admin/data'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'Settings',
    to: '/admin/settings'
  }
]

export function AdminSidebar() {
  return (
    <aside className="bg-muted border-r p-2 flex flex-col items-center gap-4">
      {navItems.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "p-2 rounded-lg hover:bg-secondary",
            "flex flex-col items-center gap-1"
          )}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </aside>
  )
} 
