import { db } from './client'
import type { Folder, CreateFolderData, UpdateFolderData } from './types'

export const folderDb = {
  list: async (userId: string) => {
    const { data, error } = await db
      .from('folders')
      .select('*')
      .eq('user_id', userId)
      .order('name')
    
    if (error) throw error
    return data as Folder[]
  },

  create: async (folder: CreateFolderData) => {
    const { data, error } = await db
      .from('folders')
      .insert(folder)
      .select()
      .single()
    
    if (error) throw error
    return data as Folder
  },

  update: async (id: string, updates: UpdateFolderData) => {
    const { data, error } = await db
      .from('folders')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data as Folder
  },

  delete: async (id: string) => {
    const { error } = await db
      .from('folders')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  getById: async (id: string) => {
    const { data, error } = await db
      .from('folders')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data as Folder
  },
} 
