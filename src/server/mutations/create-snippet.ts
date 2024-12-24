import { db } from '../db'
import { snippetSchema } from '../db/schema/snippets'
import type { Snippet } from '../db/schema/snippets'

export async function createSnippet(snippet: Omit<Snippet, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await db
    .from('snippets')
    .insert(snippet)
    .select()
    .single()

  if (error) throw error
  return snippetSchema.parse(data)
}