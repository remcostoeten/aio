/**
 * @author Remco Stoeten
 * @description Core user schema
 */

export type User = {
    id: string
    email: string
    role: 'admin' | 'user'
    isActive: boolean
    createdAt: Date
    updatedAt: Date
} 
