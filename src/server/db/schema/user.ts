/**
 * @author Remco Stoeten
 * @description User schema and types
 */

export type User = {
    id: string
    email: string
    role: 'admin' | 'user'
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

export type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
export type UpdateUserInput = Partial<CreateUserInput> 
