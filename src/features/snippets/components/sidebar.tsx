"use client"

import { PlusCircle, Search, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { ScrollArea } from "@/shared/components/ui/scroll-area"
import { useSnippetStore } from "../store/snippet-store"
import { Badge } from "@/shared/components/ui/badge"
import { cn } from "@/shared/helpers"
import { NoSnippetsFound } from "./empty-states"

function SnippetItem({ snippet, onClick }: { snippet: any; onClick: () => void }) {
  return (
    <div
      className={cn(
        "p-3 rounded-lg cursor-pointer transition-colors group",
        snippet.id === useSnippetStore().selectedSnippetId
          ? "bg-secondary"
          : "hover:bg-secondary/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{snippet.title}</h3>
      </div>
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary" className="bg-primary/10">
          {snippet.language}
        </Badge>
        {snippet.labels.map((label: string) => (
          <Badge key={label} variant="outline" className="border-primary/20">
            {label}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function Sidebar() {
  const [search, setSearch] = useState("")
  const { snippets, selectedSnippetId, setSelectedSnippetId, addSnippet } = useSnippetStore()

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(search.toLowerCase()) ||
      snippet.labels.some((label) => label.toLowerCase().includes(search.toLowerCase()))
  )

  const handleNewSnippet = () => {
    addSnippet({
      title: "New Snippet",
      code: "",
      language: "javascript",
      description: "",
      frameworks: [],
      labels: [],
      folderId: null,
    })
  }

  return (
    <div className="h-screen border-r bg-card">
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <Button
            variant="default"
            className="flex-1 justify-start space-x-2"
            onClick={handleNewSnippet}
          >
            <PlusCircle size={16} />
            <span>New Snippet</span>
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search snippets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 bg-background"
          />
          {search && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setSearch("")}
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-4 space-y-2">
          {filteredSnippets.length === 0 ? (
            <NoSnippetsFound onCreateSnippet={handleNewSnippet} />
          ) : (
            filteredSnippets.map((snippet) => (
              <SnippetItem
                key={snippet.id}
                snippet={snippet}
                onClick={() => setSelectedSnippetId(snippet.id)}
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}