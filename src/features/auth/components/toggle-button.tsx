import { Eye, EyeOff } from 'lucide-react'

interface ToggleButtonProps {
  show: boolean
  onClick: () => void
}

export function ToggleButton({ show, onClick }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={show ? 'Hide password' : 'Show password'}
    >
      {show ? (
        <Eye className="h-4 w-4" />
      ) : (
        <EyeOff className="h-4 w-4" />
      )}
    </button>
  )
}