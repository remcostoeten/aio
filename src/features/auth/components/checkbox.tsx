interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 group cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="h-4 w-4 border border-gray-600 rounded peer-focus:ring-1 peer-focus:ring-brand peer-checked:border-brand peer-checked:bg-brand transition-all duration-200">
          <svg
            className={`h-4 w-4 text-white stroke-2 absolute top-0 left-0 ${
              checked ? 'scale-100' : 'scale-0'
            } transition-transform duration-200`}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3.5 8L6.5 11L12.5 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
        {label}
      </span>
    </label>
  )
}