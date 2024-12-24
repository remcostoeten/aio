import { Toaster } from 'sonner'
import { RouterProvider } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { AuthProvider } from '@/shared/context/auth-context'
import { router } from './routes'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
