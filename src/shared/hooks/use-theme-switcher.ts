/**
 * @author Remco Stoeten
 * @description Theme switcher hook with type safety
 */

import {
	defaultTheme,
	themes,
	type ThemeColors,
	type ThemeName
} from '@/shared/config/theme'
import { create } from 'zustand'

type ThemeStore = {
	currentTheme: ThemeName
	colors: ThemeColors
	setTheme: (theme: ThemeName) => void
	getTheme: () => ThemeColors
}

export const useThemeSwitcher = create<ThemeStore>((set, get) => ({
	currentTheme: defaultTheme,
	colors: themes[defaultTheme],
	setTheme: (theme) => set({ currentTheme: theme, colors: themes[theme] }),
	getTheme: () => themes[get().currentTheme]
}))
