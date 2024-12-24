import { createBrowserRouter } from 'react-router-dom'
import { folderRoutes } from '@/features/folders/routes'
import { authRoutes } from '@/features/auth/routes'

export const router = createBrowserRouter([
  ...folderRoutes,
  ...authRoutes
]) 
