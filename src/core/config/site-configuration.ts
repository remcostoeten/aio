export const siteConfig = {
  name: 'Code Snippet Manager',
  description: 'A modern snippet management system',
  url: 'https://snippets.example.com',
  ogImage: 'https://snippets.example.com/og.png',
  links: {
    github: 'https://github.com/yourusername/code-snippets',
    twitter: 'https://twitter.com/yourusername'
  },
  auth: {
    minPasswordLength: 8,
    maxPasswordLength: 100,
    requireSpecialChar: true,
    requireNumber: true,
    requireUppercase: true,
    requireLowercase: true
  }
} as const