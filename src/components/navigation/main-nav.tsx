import { NavLink } from './nav-link'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Changelog', to: '/changelog' },
  { label: 'Roadmap', to: '/roadmap' }
]

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="text-gray-400 hover:text-white">
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}