import { db } from './client'
import type { SnippetVersion, CreateVersionData } from './types'

export const versionDb = {
  listForSnippet: async (snippetId: string) => {
    const { data, error } = await db
      .from('snippet_versions')
      .select('*')
      .eq('snippet_id', snippetId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as SnippetVersion[]
  },

  create: async (version: CreateVersionData) => {
    const { data, error } = await db
      .from('snippet_versions')
      .insert(version)
      .select()
      .single()
    
    if (error) throw error
    return data as SnippetVersion
  }
} 
