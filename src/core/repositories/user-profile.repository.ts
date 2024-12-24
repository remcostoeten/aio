```typescript
import { PrismaClient } from '@prisma/client'
import type { UserProfile, UpdateUserProfileInput } from '../types/user'

const prisma = new PrismaClient()

export const userProfileRepository = {
  async getByUserId(userId: string): Promise<UserProfile | null> {
    const profile = await prisma.userProfile.findUnique({
      where: { userId }
    })
    return profile
  },

  async create(userId: string, data: UpdateUserProfileInput): Promise<UserProfile> {
    const profile = await prisma.userProfile.create({
      data: {
        userId,
        ...data
      }
    })
    return profile
  },

  async update(userId: string, data: UpdateUserProfileInput): Promise<UserProfile> {
    const profile = await prisma.userProfile.update({
      where: { userId },
      data: {
        ...data,
        updatedAt: new Date()
      }
    })
    return profile
  },

  async delete(userId: string): Promise<void> {
    await prisma.userProfile.delete({
      where: { userId }
    })
  }
}
```