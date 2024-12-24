import { useRoute } from '@tanstack/react-router'

export function SnippetDetailView() {
  const { loaderData: { snippet } } = useRoute()

  return (
    <div>
      <h1>{snippet.title}</h1>
      <pre>
        <code>{snippet.content}</code>
      </pre>
    </div>
  )
} 
