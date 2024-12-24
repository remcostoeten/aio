import type { Snippet } from './schema/snippets'
import { db } from './client'

// Database adapter interface
export interface DatabaseAdapter {
  snippets: {
    create(data: Omit<Snippet, 'id' | 'created_at' | 'updated_at'>): Promise<Snippet>
    list(userId: string): Promise<Snippet[]>
    get(id: string): Promise<Snippet | null>
    update(id: string, data: Partial<Snippet>): Promise<Snippet>
    delete(id: string): Promise<void>
  }
}

// Supabase implementation
export const createSupabaseAdapter = (): DatabaseAdapter => ({
  snippets: {
    async create(data) {
      const { data: snippet, error } = await db
        .from('snippets')
        .insert(data)
        .select()
        .single()

      if (error) throw error
      return snippet
    },
    async list(userId) {
      const { data, error } = await db
        .from('snippets')
        .select()
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
    async get(id) {
      const { data, error } = await db
        .from('snippets')
        .select()
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    },
    async update(id, data) {
      const { data: snippet, error } = await db
        .from('snippets')
        .update(data)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return snippet
    },
    async delete(id) {
      const { error } = await db
        .from('snippets')
        .delete()
        .eq('id', id)

      if (error) throw error
    }
  }
})