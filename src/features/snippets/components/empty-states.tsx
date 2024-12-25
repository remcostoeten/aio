
import { Code, FileCode } from "lucide-react"
import { EmptyState } from "@/shared/components/empty-state"

interface SnippetsEmptyStateProps {
  onCreateSnippet: () => void
}

export function NoSnippetsFound({ onCreateSnippet }: SnippetsEmptyStateProps) {
  return (
    <EmptyState
      icon={FileCode}
      title="No snippets found"
      description="Create your first code snippet to start organizing your code library."
      action={{
        label: "Create Snippet",
        onClick: onCreateSnippet
      }}
    />
  )
}

export function NoSnippetSelected() {
  return (
    <EmptyState
      icon={Code}
      title="No snippet selected"
      description="Select a snippet from the sidebar or create a new one to start editing."
    />
  )
}