import { Input } from '@/shared/components/ui'
import { Search } from 'lucide-react'
import { useState } from 'react'

type SearchBarProps = {
  onSearch: (query: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('')
  
  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search snippets..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onSearch(e.target.value)
        }}
        className="pl-9"
      />
    </div>
  )
} 

export default SearchBar
