export const theme = {
  colors: {
    primary: '#3ECF8E',
    secondary: '#2F2F2F',
    background: {
      default: '#1A1A1A',
      card: '#2F2F2F',
      input: '#1F1F1F',
      black: '#000000'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#999999',
      muted: '#666666'
    },
    border: {
      default: '#2F2F2F',
      hover: '#3F3F3F',
      error: '#FF4444'
    }
  }
} as const

export type Theme = typeof theme

// Re-export for convenience
export { themes } from './themes'