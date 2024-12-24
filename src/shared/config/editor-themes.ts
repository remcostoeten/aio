import { editor } from 'monaco-editor'

export function defineEditorThemes() {
  // Dracula theme
  editor.defineTheme('dracula', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6272A4' },
      { token: 'string', foreground: 'F1FA8C' },
      { token: 'keyword', foreground: 'FF79C6' },
      { token: 'number', foreground: 'BD93F9' },
      { token: 'operator', foreground: 'FF79C6' },
      { token: 'function', foreground: '50FA7B' },
    ],
    colors: {
      'editor.background': '#282A36',
      'editor.foreground': '#F8F8F2',
      'editor.lineHighlightBackground': '#44475A',
      'editor.selectionBackground': '#44475A',
      'editor.inactiveSelectionBackground': '#44475A70',
    },
  })

  // Monokai theme
  editor.defineTheme('monokai', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '88846f' },
      { token: 'string', foreground: 'e6db74' },
      { token: 'keyword', foreground: 'f92672' },
      { token: 'number', foreground: 'ae81ff' },
      { token: 'operator', foreground: 'f92672' },
      { token: 'function', foreground: 'a6e22e' },
    ],
    colors: {
      'editor.background': '#272822',
      'editor.foreground': '#f8f8f2',
      'editor.lineHighlightBackground': '#3e3d32',
      'editor.selectionBackground': '#49483e',
      'editor.inactiveSelectionBackground': '#49483e70',
    },
  })

  // GitHub theme
  editor.defineTheme('github', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '6a737d' },
      { token: 'string', foreground: '032f62' },
      { token: 'keyword', foreground: 'd73a49' },
      { token: 'number', foreground: '005cc5' },
      { token: 'operator', foreground: 'd73a49' },
      { token: 'function', foreground: '6f42c1' },
    ],
    colors: {
      'editor.background': '#ffffff',
      'editor.foreground': '#24292e',
      'editor.lineHighlightBackground': '#f6f8fa',
      'editor.selectionBackground': '#c8c8fa',
      'editor.inactiveSelectionBackground': '#c8c8fa70',
    },
  })

  // Solarized Dark theme
  editor.defineTheme('solarized-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '657b83' },
      { token: 'string', foreground: '2aa198' },
      { token: 'keyword', foreground: '859900' },
      { token: 'number', foreground: 'd33682' },
      { token: 'operator', foreground: '859900' },
      { token: 'function', foreground: 'b58900' },
    ],
    colors: {
      'editor.background': '#002b36',
      'editor.foreground': '#839496',
      'editor.lineHighlightBackground': '#073642',
      'editor.selectionBackground': '#073642',
      'editor.inactiveSelectionBackground': '#07364270',
    },
  })

  // Solarized Light theme
  editor.defineTheme('solarized-light', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '93a1a1' },
      { token: 'string', foreground: '2aa198' },
      { token: 'keyword', foreground: '859900' },
      { token: 'number', foreground: 'd33682' },
      { token: 'operator', foreground: '859900' },
      { token: 'function', foreground: 'b58900' },
    ],
    colors: {
      'editor.background': '#fdf6e3',
      'editor.foreground': '#657b83',
      'editor.lineHighlightBackground': '#eee8d5',
      'editor.selectionBackground': '#eee8d5',
      'editor.inactiveSelectionBackground': '#eee8d570',
    },
  })
}