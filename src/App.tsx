'use client'

import { RouterProvider } from "@tanstack/react-router"
import { AuthProvider } from './features/auth/contexts/auth-context';
import { router } from './routes';
import { createAuthService } from './api/services/auth-service';
import { getDatabaseClient } from './api/clients/database-client';
import ErrorBoundary from './components/error-boundary';
import { env } from './api/env';

type Props = {};

export default function App({}: Props) {
  const dbClient = getDatabaseClient();
  const authService = dbClient ? createAuthService(dbClient) : null;

  return (
    <ErrorBoundary>
      {authService ? (
        <AuthProvider authService={authService}>
          <RouterProvider router={router} />
        </AuthProvider>
      ) : (
        // Fallback UI when Supabase is not configured
        <RouterProvider router={router} />
      )}
    </ErrorBoundary>
  );
}
