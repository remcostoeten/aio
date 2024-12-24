import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { themes } from '../config/themes'
import type { Theme, ThemeColors } from '../config/themes'

interface ThemeState {
  current: Theme
  colors: ThemeColors
  setTheme: (theme: Theme) => void
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      current: 'default',
      colors: themes.default,
      setTheme: (theme) => set({ current: theme, colors: themes[theme] })
    }),
    {
      name: 'theme-storage'
    }
  )
)