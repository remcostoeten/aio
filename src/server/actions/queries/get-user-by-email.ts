/**
 * @author Remco Stoeten
 * @description Query to fetch a user by their email
 */

import { mockUsers } from '@/server/db'
import { User } from '@/server/db/schema/user'

export async function getUserByEmail(email: string): Promise<User | undefined> {
    // Mock implementation
    return mockUsers.find(user => user.email === email)
}

// Future Drizzle implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema/user'
import { eq } from 'drizzle-orm'

export async function getUserByEmail(email: string): Promise<User | undefined> {
    const result = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1)
    return result[0]
}
*/ 
