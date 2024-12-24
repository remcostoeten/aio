"use client"

import { Search } from "lucide-react"
import { Input } from "@/shared/components/ui/input"
import { useSearchStore } from "@/shared/store/search-store"
import { useCallback } from "react"
import { useDebounce } from "@/shared/hooks/use-debounce"

export function Header() {
  const { query, setQuery } = useSearchStore()
  
  const debouncedSetQuery = useDebounce(setQuery, 300)

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Update the input immediately for responsiveness
    e.target.value = value
    // Debounce the actual search
    debouncedSetQuery(value)
  }, [debouncedSetQuery])

  return (
    <div className="border-b px-4 py-3 flex items-center justify-between bg-card">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">Code Snippets</h1>
      </div>
      <div className="relative w-96">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search snippets..."
          defaultValue={query}
          onChange={handleSearch}
          className="pl-8 bg-background"
        />
      </div>
    </div>
  )
}