export type Snippet = {
  id: string
  title: string
  code: string
  language: string
  isDraft: boolean
}

export type SnippetStore = {
  snippets: Snippet[]
  selectedSnippetId: string | null
  updateSnippet: (id: string, updates: Partial<Snippet>) => void
  publishSnippet: (id: string, commitMessage: string) => void
  duplicateSnippet: (id: string) => void
}
