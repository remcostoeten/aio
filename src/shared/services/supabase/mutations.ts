import { supabase } from './client'
import type { Database } from './types'

type SnippetInsert = Database['public']['Tables']['snippets']['Insert']
type SnippetUpdate = Database['public']['Tables']['snippets']['Update']
type SnippetVersionInsert = Database['public']['Tables']['snippet_versions']['Insert']
type FolderInsert = Database['public']['Tables']['folders']['Insert']
type FolderUpdate = Database['public']['Tables']['folders']['Update']

export const mutations = {
  snippets: {
    create: async (snippet: SnippetInsert) => {
      const { data, error } = await supabase
        .from('snippets')
        .insert(snippet)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    update: async (id: string, snippet: SnippetUpdate) => {
      const { data, error } = await supabase
        .from('snippets')
        .update(snippet)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    delete: async (id: string) => {
      const { error } = await supabase
        .from('snippets')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    },

    createVersion: async (version: SnippetVersionInsert) => {
      const { data, error } = await supabase
        .from('snippet_versions')
        .insert(version)
        .select()
        .single()
      
      if (error) throw error
      return data
    }
  },

  folders: {
    create: async (folder: FolderInsert) => {
      const { data, error } = await supabase
        .from('folders')
        .insert(folder)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    update: async (id: string, folder: FolderUpdate) => {
      const { data, error } = await supabase
        .from('folders')
        .update(folder)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    delete: async (id: string) => {
      const { error } = await supabase
        .from('folders')
        .delete()
        .eq('id', id)
      
      if (error) throw error
    }
  }
}