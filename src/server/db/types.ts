/**
 * @author Remco Stoeten
 * @description Central type definitions for database entities
 */

export type Language = "typescript" | "javascript" | "python" | "rust" | "go"
export type Framework = "react" | "vue" | "angular" | "svelte" | "next"
export type Version = "latest" | "beta" | "stable"

export type User = {
  id: string
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export type Snippet = {
  id: string
  title: string
  description?: string
  code: string
  language: Language
  framework?: Framework
  version?: Version
  tags?: string[]
  isDraft: boolean
  userId: string
  createdAt: Date
  updatedAt: Date
}

export type CreateSnippetData = Omit<Snippet, 'id' | 'createdAt' | 'updatedAt'>
export type UpdateSnippetData = Partial<CreateSnippetData>

export type SnippetVersion = {
  id: string
  snippetId: string
  code: string
  message?: string
  createdAt: Date
}

export type CreateVersionData = Omit<SnippetVersion, 'id' | 'createdAt'>

export type SignInData = {
  email: string
  password: string
}

export type LoginResponse = {
  success: boolean
  user?: User
  error?: string
} 
