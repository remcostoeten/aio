import { Command } from 'cmdk'
import { useSearch } from '../hooks/use-search'
import { useHotkeys } from '@/shared/hooks'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { results, trackSelection } = useSearch(query)

  // Keyboard shortcut
  useHotkeys('cmd+k', () => setOpen(true))

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input 
        value={query}
        onValueChange={setQuery}
        placeholder="Search snippets, folders, or actions..."
      />

      <Command.List>
        {results.map((result, index) => (
          <Command.Item
            key={result.id}
            onSelect={() => {
              trackSelection(result, index)
              if (result.action) {
                result.action()
              } else if (result.url) {
                router.navigate(result.url)
              }
              setOpen(false)
            }}
          >
            {result.icon}
            <div>
              <div>{result.title}</div>
              {result.description && (
                <div className="text-sm text-muted-foreground">
                  {result.description}
                </div>
              )}
            </div>
          </Command.Item>
        ))}
      </Command.List>
    </Command.Dialog>
  )
} 
