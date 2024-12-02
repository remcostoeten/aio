/**
 * @author Remco Stoeten
 * @description User profile schema with personal information
 */

export type Profile = {
    id: string
    userId: string // Relation to User
    firstName: string
    lastName: string
    avatarUrl?: string
    preferences: {
        theme?: 'light' | 'dark'
        notifications?: boolean
        language?: string
    }
    updatedAt: Date
} 
