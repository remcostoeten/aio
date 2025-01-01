'use client'

import { RouterProvider } from "@tanstack/react-router"
import { AuthProvider } from "./features/auth/contexts/auth-context"
import { router } from "./routes"
import { createAuthService } from "./api/services/auth-service"
import { getDatabaseClient } from "./api/clients/database-client"
import ErrorBoundary from './components/error-boundary'

type Props = {}

export default function App({}: Props) {
  return (
    <ErrorBoundary>
      <AuthProvider authService={createAuthService(getDatabaseClient())}>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  )
}
