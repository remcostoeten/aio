import { Link } from '@tanstack/react-router'
import { BookOpen, Code2 } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Code2 className="h-8 w-8 text-brand" />
            <span className="text-white font-medium">DevSpace</span>
          </Link>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Documentation
          </a>
        </div>
      </div>
    </header>
  )
}