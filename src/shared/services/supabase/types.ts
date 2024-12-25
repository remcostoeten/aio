/**
 * @author Remco Stoeten
 * @description Types for Supabase Database schema
 */

/**
 * Represents JSON data which can be a primitive, an array of JSON, or an object with string keys and JSON values.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

/**
 * Defines the structure of the Supabase Database.
 */
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      /**
       * Represents the 'snippets' table in the database.
       */
      snippets: {
        Row: {
          id: string
          title: string
          code: string
          language: string
          description: string | null
          frameworks: string[]
          labels: string[]
          github_url: string | null
          local_path: string | null
          user_id: string
          folder_id: string | null
          created_at: string
          updated_at: string
          is_public: boolean
        }
        Insert: Omit<Database['public']['Tables']['snippets']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['snippets']['Insert']>
      }
      /**
       * Represents the 'snippet_versions' table in the database.
       */
      snippet_versions: {
        Row: {
          id: string
          snippet_id: string
          code: string
          message: string | null
          created_at: string
          user_id: string
        }
        Insert: Omit<Database['public']['Tables']['snippet_versions']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['snippet_versions']['Insert']>
      }
      /**
       * Represents the 'folders' table in the database.
       */
      folders: {
        Row: {
          id: string
          name: string
          parent_id: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['folders']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['folders']['Insert']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
```
