import { useAuth } from '../features/auth/contexts/auth-context'
import { LogOut, User } from 'lucide-react'

export function Dashboard() {
  const { user, signOut } = useAuth()

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-surface-light rounded-full p-2">
              <User className="h-6 w-6 text-brand" />
            </div>
            <div>
              <p className="text-white">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="inline-flex items-center px-4 py-2 border border-gray-600 rounded text-sm font-medium text-white bg-surface-light hover:bg-surface-dark transition-colors"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-surface-light shadow rounded-lg p-6">
          <h2 className="text-2xl font-medium text-white mb-4">Welcome back!</h2>
          <p className="text-gray-400">
            This is your personal dashboard. You're successfully authenticated!
          </p>
        </div>
      </main>
    </div>
  )
}