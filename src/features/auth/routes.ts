import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/root'
import { LoginView } from './views/login-view'
import { RegisterView } from './views/register-view'
import { redirect } from '@tanstack/react-router'

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'auth',
})

export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: 'login',
  component: LoginView
})

export const loginRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  beforeLoad: () => {
    throw redirect({
      to: '/auth/login'
    })
  }
})

export const authRoutes = [
  authRoute, 
  loginRoute,
  loginRedirectRoute
] 
