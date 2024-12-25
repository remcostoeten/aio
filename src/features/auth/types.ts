import { type ReactNode } from 'react'

export type User = {
  id: string
  email: string
  name: string
}

export type AuthFormProps = {
  type: 'login' | 'register'
  action: (formData: FormData) => Promise<void>
}

export type EmailFormProps = {
  type: 'login' | 'register'
  onSubmit: (formData: FormData) => Promise<void>
}

export type AuthLayoutProps = {
  children: ReactNode
  title: string
  subtitle: ReactNode
}

export type LoginResponse = {
  success: boolean
  user?: User
  error?: string
} 
