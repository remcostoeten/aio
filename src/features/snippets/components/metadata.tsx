/**
 * @author Remco Stoeten
 * @description Snippet metadata editor component for managing snippet properties
 */

import { useSnippetStore } from '../store/snippet-store'
import { Input, Label, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Badge } from 'ui'
import { X } from 'lucide-react'
import type { Language, Framework, Version } from '@/server/db/types'

export function Metadata() {
  const { snippets, selectedSnippetId, updateSnippet } = useSnippetStore()
  const selectedSnippet = snippets.find((s) => s.id === selectedSnippetId)

  if (!selectedSnippet) return null

  return (
    <div className="space-y-6 p-6">
      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={selectedSnippet.description || ""}
          onChange={(e) => updateSnippet(selectedSnippet.id, { description: e.target.value })}
          placeholder="Add a description..."
          className="h-24 resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label>Language</Label>
        <Select
          value={selectedSnippet.language}
          onValueChange={(value) => updateSnippet(selectedSnippet.id, { language: value as Language })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="go">Go</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Framework</Label>
        <Select
          value={selectedSnippet.framework || ""}
          onValueChange={(value) => updateSnippet(selectedSnippet.id, { framework: value as Framework })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
            <SelectItem value="next">Next.js</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Version</Label>
        <Select
          value={selectedSnippet.version || ""}
          onValueChange={(value) => updateSnippet(selectedSnippet.id, { version: value as Version })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="beta">Beta</SelectItem>
            <SelectItem value="stable">Stable</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Tags</Label>
        <div className="flex flex-wrap gap-2">
          {selectedSnippet.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              {tag}
              <button
                onClick={() =>
                  updateSnippet(selectedSnippet.id, {
                    tags: selectedSnippet.tags?.filter((t) => t !== tag),
                  })
                }
                className="ml-1 rounded-full hover:bg-secondary"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <Input
            className="w-24 h-7"
            placeholder="Add tag..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
                const newTag = (e.target as HTMLInputElement).value
                updateSnippet(selectedSnippet.id, {
                  tags: [...(selectedSnippet.tags || []), newTag],
                })
                ;(e.target as HTMLInputElement).value = ""
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
