import { useEffect } from 'react'
import { editor } from 'monaco-editor'
import { usePersistentState } from './use-persistent-state'
import { defineEditorThemes } from '../config/editor-themes'

export type EditorTheme = 'dracula' | 'monokai' | 'solarized-dark' | 'vs-dark'

export function useEditorTheme() {
  const [theme, setTheme] = usePersistentState<EditorTheme>('monaco-theme', 'dracula')

  useEffect(() => {
    // Define themes when the hook is first mounted
    defineEditorThemes()
    
    // Set the theme
    editor.setTheme(theme)
  }, [theme])

  return { theme, setTheme }
}