/**
 * @author Remco Stoeten
 * @description Mutation to update an existing user
 */

import { mockUsers } from '@/server/db'
import { User } from '@/server/db/schema/user'

type UpdateUserInput = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>

export async function updateUser(id: string, input: UpdateUserInput): Promise<User | undefined> {
    // Mock implementation
    const userIndex = mockUsers.findIndex(user => user.id === id)
    if (userIndex === -1) return undefined

    const updatedUser = {
        ...mockUsers[userIndex],
        ...input,
        updatedAt: new Date()
    }
    mockUsers[userIndex] = updatedUser
    return updatedUser
}

// Future Drizzle implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema/user'
import { eq } from 'drizzle-orm'

export async function updateUser(id: string, input: UpdateUserInput): Promise<User | undefined> {
    const [updatedUser] = await db
        .update(users)
        .set({ ...input, updatedAt: new Date() })
        .where(eq(users.id, id))
        .returning()
    return updatedUser
}
*/
