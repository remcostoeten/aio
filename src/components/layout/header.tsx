import { Link } from '@tanstack/react-router'
import { useAuth } from '../../features/auth/contexts/auth-context'
import { ChevronDown, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { indexRoute, changelogRoute, roadmapRoute, signInRoute } from '../../router/routes'

type NavItem = {
  label: string
  route: typeof indexRoute | typeof changelogRoute | typeof roadmapRoute
}

const navItems: NavItem[] = [
  { label: 'Home', route: indexRoute },
  { label: 'Changelog', route: changelogRoute },
  { label: 'Roadmap', route: roadmapRoute },
]

export default function Header() {
  const { user, signOut } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
  const closeDropdown = () => setIsDropdownOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link
            to={indexRoute.to}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="font-bold">AIO</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.route.path}
                to={item.route.to}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>{user.email}</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-50"
                      onClick={closeDropdown}
                    />
                    <div className="absolute right-0 z-50 mt-1 min-w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2">
                      <div className="px-2 py-1.5 text-sm font-semibold">{user.email}</div>
                      <div className="h-px bg-muted my-1" />
                      <button
                        onClick={() => {
                          closeDropdown()
                          signOut()
                        }}
                        className="relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                to={signInRoute.to}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
} 
