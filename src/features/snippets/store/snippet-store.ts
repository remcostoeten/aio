
import { create } from 'zustand'
import { type SnippetStore } from '../types'

export const useSnippetStore = create<SnippetStore>((set) => ({
  // ... store implementation
}))
