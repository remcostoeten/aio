/**
 * @author Remco Stoeten
 * @description User session schema for auth management
 */

export type Session = {
    id: string
    userId: string // Relation to User
    token: string
    lastActive: Date
    expiresAt: Date
    createdAt: Date
    userAgent?: string
    ipAddress?: string
} 
