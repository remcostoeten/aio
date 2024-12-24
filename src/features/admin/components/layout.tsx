import { Link } from '@tanstack/react-router'

export function AdminLayout() {
  return (
    <div className="grid grid-cols-[240px_1fr]">
      <aside className="border-r p-4">
        <nav className="space-y-2">
          <Link 
            to="/admin/analytics"
            className="block p-2 hover:bg-secondary rounded-lg"
          >
            Analytics
          </Link>
          <Link 
            to="/admin/users"
            className="block p-2 hover:bg-secondary rounded-lg"
          >
            Users
          </Link>
          {/* More admin routes... */}
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
} 
