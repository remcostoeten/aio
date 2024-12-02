/**
 * @author Remco Stoeten
 * @description Query to fetch a user by their ID
 */

import { mockUsers } from '@/server/db'
import { User } from '@/server/db/schema/user'

export async function getUserById(id: string): Promise<User | undefined> {
    // Mock implementation
    return mockUsers.find(user => user.id === id)
}

// Future Drizzle implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema/user'
import { eq } from 'drizzle-orm'

export async function getUserById(id: string): Promise<User | undefined> {
    const result = await db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1)
    return result[0]
}
*/ 
