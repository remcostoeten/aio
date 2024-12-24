```typescript
import { useState, useEffect } from 'react'
import { useAuth } from '@/shared/context/auth-context'
import type { UserProfile, UpdateUserProfileInput } from '@/core/types/user'
import { userProfileRepository } from '@/core/repositories/user-profile.repository'
// For Supabase, import from '@/shared/services/supabase/repositories/user-profile.repository'

export function useUserProfile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!user) {
      setProfile(null)
      setLoading(false)
      return
    }

    const loadProfile = async () => {
      try {
        const data = await userProfileRepository.getByUserId(user.id)
        setProfile(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load profile'))
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [user])

  const updateProfile = async (data: UpdateUserProfileInput) => {
    if (!user) return

    try {
      setLoading(true)
      const updated = profile
        ? await userProfileRepository.update(user.id, data)
        : await userProfileRepository.create(user.id, data)
      setProfile(updated)
      return updated
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update profile'))
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    profile,
    loading,
    error,
    updateProfile
  }
}
```