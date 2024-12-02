/**
 * @author Remco Stoeten
 * @description Mock data for development
 */

import type { Profile } from '../db/schema/profile'
import type { User } from '../db/schema/user'

export const mockUsers: User[] = [
    {
        id: '1',
        email: 'admin@remcostoeten.com',
        role: 'admin',
        isActive: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    }
]

export const mockProfiles: Profile[] = [
    {
        id: '1',
        userId: '1',
        firstName: 'Remco',
        lastName: 'Stoeten',
        avatarUrl: 'https://github.com/remcostoeten.png',
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'en'
        },
        updatedAt: new Date('2024-01-01')
    }
]
