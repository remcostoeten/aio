export const themes = {
  default: {
    primary: '#3ECF8E',
    background: {
      main: '#1A1A1A',
      card: '#1F1F1F',
      input: '#1F1F1F'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#999999'
    },
    border: {
      default: '#2F2F2F',
      hover: '#4B4B4B'
    }
  },
  dracula: {
    primary: '#FF79C6',
    background: {
      main: '#282A36',
      card: '#44475A',
      input: '#44475A'
    },
    text: {
      primary: '#F8F8F2',
      secondary: '#6272A4'
    },
    border: {
      default: '#44475A',
      hover: '#6272A4'
    }
  },
  light: {
    primary: '#3ECF8E',
    background: {
      main: '#FFFFFF',
      card: '#F5F5F5',
      input: '#F5F5F5'
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666'
    },
    border: {
      default: '#E5E5E5',
      hover: '#CCCCCC'
    }
  }
} as const

export type Theme = keyof typeof themes
export type ThemeColors = typeof themes.default