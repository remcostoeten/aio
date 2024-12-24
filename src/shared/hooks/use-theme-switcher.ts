import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { themes, defaultTheme } from '@/shared/config/theme'
import type { Theme } from '@/shared/types/theme'

interface ThemeState {
  currentTheme: string
  setTheme: (theme: string) => void
  getTheme: () => Theme
}

export const useThemeSwitcher = create<ThemeState>()(
  persist(
    (set, get) => ({
      currentTheme: defaultTheme,
      setTheme: (theme) => set({ currentTheme: theme }),
      getTheme: () => themes[get().currentTheme]
    }),
    {
      name: 'theme-storage'
    }
  )
)