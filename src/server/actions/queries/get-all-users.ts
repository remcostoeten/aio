/**
 * @author Remco Stoeten
 * @description Query to fetch all users
 */

import { mockUsers } from '@/server/db'
import { User } from '@/server/db/schema/user'

export async function getAllUsers(): Promise<User[]> {
    // Mock implementation
    return mockUsers
}

// Future Drizzle implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema/user'

export async function getAllUsers(): Promise<User[]> {
    return await db.select().from(users)
}
*/
