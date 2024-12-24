```typescript
import { supabase } from '../client'
import type { UserProfile, UpdateUserProfileInput } from '@/core/types/user'

export const userProfileRepository = {
  async getByUserId(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) throw error
    return data
  },

  async create(userId: string, data: UpdateUserProfileInput): Promise<UserProfile> {
    const { data: profile, error } = await supabase
      .from('user_profiles')
      .insert([{ user_id: userId, ...data }])
      .select()
      .single()

    if (error) throw error
    return profile
  },

  async update(userId: string, data: UpdateUserProfileInput): Promise<UserProfile> {
    const { data: profile, error } = await supabase
      .from('user_profiles')
      .update(data)
      .eq('user_id', userId)
      .select()
      .single()

    if (error) throw error
    return profile
  },

  async delete(userId: string): Promise<void> {
    const { error } = await supabase
      .from('user_profiles')
      .delete()
      .eq('user_id', userId)

    if (error) throw error
  }
}
```