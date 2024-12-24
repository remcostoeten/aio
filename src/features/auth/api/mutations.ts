import { useMutation } from '@tanstack/react-query'
import { authDb } from '@/services/database/auth'
import type { SignInData } from '@/services/database/types'

export const useSignIn = () => {
  return useMutation({
    mutationFn: (data: SignInData) => {
      if ('provider' in data) {
        return authDb.signInWithProvider(data.provider)
      }
      return authDb.signInWithEmail(data)
    }
  })
}

export const useSignOut = () => {
  return useMutation({
    mutationFn: () => authDb.signOut()
  })
}
