import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "#2F2F2F",
        primary: {
          DEFAULT: "#3ECF8E",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
