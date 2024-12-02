/**
 * @author Remco Stoeten
 * @description Mutation to create a new user
 */

import { mockUsers } from '@/server/db'
import { User } from '@/server/db/schema/user'

type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export async function createUser(input: CreateUserInput): Promise<User> {
    // Mock implementation
    const newUser: User = {
        id: String(mockUsers.length + 1),
        ...input,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    mockUsers.push(newUser)
    return newUser
}

// Future Drizzle implementation (commented out)
/*
import { db } from '@/server/db'
import { users } from '@/server/db/schema/user'

export async function createUser(input: CreateUserInput): Promise<User> {
    const [newUser] = await db
        .insert(users)
        .values(input)
        .returning()
    return newUser
}
*/
