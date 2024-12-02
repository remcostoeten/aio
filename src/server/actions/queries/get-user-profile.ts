/**
 * @author Remco Stoeten
 * @description Query to fetch user profile by email
 */

'use server'

import { mockProfiles, mockUsers } from '@/server/config/mock-users'
import type { Profile } from '@/server/db/schema/profile'

export async function getUserProfile(email: string): Promise<Profile | undefined> {
    const user = mockUsers.find(u => u.email === email)
    if (!user) return undefined

    return mockProfiles.find(p => p.userId === user.id)
}

export default getUserProfile
