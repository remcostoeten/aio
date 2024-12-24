/**
 * @author Remco Stoeten
 * @description Generic database types that don't depend on Supabase
 */

export type Snippet = {
  id: string
  title: string
  content: string
  language: string
  user_id: string
  folder_id?: string
  labels: string[]
  created_at: string
  updated_at: string
}

export type CreateSnippetData = Omit<Snippet, 'id' | 'created_at' | 'updated_at'>
export type UpdateSnippetData = Partial<CreateSnippetData> 

export type Folder = {
  id: string
  name: string
  parent_id?: string
  user_id: string
  created_at: string
  updated_at: string
}

export type CreateFolderData = Omit<Folder, 'id' | 'created_at' | 'updated_at'>
export type UpdateFolderData = Partial<CreateFolderData> 

export type SnippetVersion = {
  id: string
  snippet_id: string
  code: string
  message?: string
  created_at: string
  user_id: string
}

export type CreateVersionData = Omit<SnippetVersion, 'id' | 'created_at'> 

export type SignInData = 
  | { email: string; password: string }
  | { provider: 'github' | 'google' }

export type User = {
  id: string
  email: string
  avatar_url?: string
  role: 'user' | 'admin'
} 
