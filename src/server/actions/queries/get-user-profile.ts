/**
 * @author Remco Stoeten
 * @description Query to get user profile by user ID
 */

'use server'

import { mockProfiles } from '@/server/config/mock-users'
import type { Profile } from '@/server/db/schema/profile'

export async function getUserProfile(userId: string): Promise<Profile | undefined> {
    return mockProfiles.find(p => p.userId === userId)
}

export default getUserProfile
