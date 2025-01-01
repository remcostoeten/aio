import { RouterProvider } from '@tanstack/react-router'
import { AuthProvider } from './features/auth/contexts/auth-context'
import { router } from './router'
import { createAuthService } from './api/services/auth-service'
import { getDatabaseClient } from './api/clients/database-client'

function App() {
  const authService = createAuthService(getDatabaseClient())

  return (
    <AuthProvider authService={authService}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App