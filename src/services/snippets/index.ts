import { db } from '@/server/db'
import type { Snippet } from '@/server/db/schema/snippets'

export const snippetService = {
  create: (data: Omit<Snippet, 'id' | 'created_at' | 'updated_at'>) => 
    db.snippets.create(data),
  list: (userId: string) => db.snippets.list(userId),
  get: (id: string) => db.snippets.get(id),
  update: (id: string, data: Partial<Snippet>) => db.snippets.update(id, data),
  delete: (id: string) => db.snippets.delete(id),
} as const