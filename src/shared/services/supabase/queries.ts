import { supabase } from './client'
import type { Database } from './types'

type Snippet = Database['public']['Tables']['snippets']['Row']
type SnippetVersion = Database['public']['Tables']['snippet_versions']['Row']
type Folder = Database['public']['Tables']['folders']['Row']

export const queries = {
  snippets: {
    list: async (userId: string) => {
      const { data, error } = await supabase
        .from('snippets')
        .select('*')
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })
      
      if (error) throw error
      return data
    },

    search: async (userId: string, query: string) => {
      const { data, error } = await supabase
        .from('snippets')
        .select('*')
        .eq('user_id', userId)
        .textSearch('search_vector', query)
        .order('updated_at', { ascending: false })
      
      if (error) throw error
      return data
    },

    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('snippets')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },

    getVersions: async (snippetId: string) => {
      const { data, error } = await supabase
        .from('snippet_versions')
        .select('*')
        .eq('snippet_id', snippetId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    }
  },

  folders: {
    list: async (userId: string) => {
      const { data, error } = await supabase
        .from('folders')
        .select('*')
        .eq('user_id', userId)
        .order('name')
      
      if (error) throw error
      return data
    },

    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('folders')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    }
  }
}