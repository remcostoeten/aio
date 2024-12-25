import { create } from 'zustand'

type User = {
  id: string
  email: string
  // Add other user properties
}

type AuthState = {
  user: User | null
  refreshUser: () => Promise<void>
}

export const useUser = create<AuthState>((set) => ({
  user: null,
  refreshUser: async () => {
    // Implement user refresh logic
    // For now just a stub
    console.log('Refreshing user...')
  }
})) 
