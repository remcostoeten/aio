/**
 * @author Remco Stoeten
 * @description Query to fetch users with optional filtering
 */

'use server'

import { mockUsers } from '@/server/config/mock-users'
import type { User } from '@/server/db/schema/user'

// Mock implementation
export async function getUsers(): Promise<User[]> {
    return mockUsers
}

// Real implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema'

export async function getUsers(): Promise<User[]> {
    return await db.select().from(users)
}
*/
