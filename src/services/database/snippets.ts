import { db } from './client'
import type { Snippet, CreateSnippetData, UpdateSnippetData } from './types'

export const snippetDb = {
  list: async (userId: string) => {
    const { data, error } = await db
      .from('snippets')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false })
    
    if (error) throw error
    return data as Snippet[]
  },
  
  getById: async (id: string) => {
    const { data, error } = await db
      .from('snippets')
      .select('*')
      .eq('id', id)
      .single()
      
    if (error) throw error
    return data as Snippet
  },
  
  create: async (snippet: CreateSnippetData) => {
    const { data, error } = await db
      .from('snippets')
      .insert(snippet)
      .select()
      .single()
    
    if (error) throw error
    return data as Snippet
  },
  
  update: async (id: string, updates: UpdateSnippetData) => {
    const { data, error } = await db
      .from('snippets')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Snippet
  },
  
  delete: async (id: string) => {
    const { error } = await db
      .from('snippets')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },
  
  listByFolder: async (folderId: string) => {
    const { data, error } = await db
      .from('snippets')
      .select('*')
      .eq('folder_id', folderId)
    
    if (error) throw error
    return data as Snippet[]
  },
} 
