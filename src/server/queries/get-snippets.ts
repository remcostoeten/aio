import { db } from '../db'
import { snippetSchema } from '../db/schema/snippets'
import type { Snippet } from '../db/schema/snippets'

export async function getSnippets(userId: string): Promise<Snippet[]> {
  const { data, error } = await db
    .from('snippets')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return z.array(snippetSchema).parse(data)
}