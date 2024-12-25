/**
 * @author Remco Stoeten
 * @description User profile repository for database operations
 */

import { db } from 'db'
import { eq } from 'drizzle-orm'
import { users } from 'schema'

export type UserProfile = typeof users.$inferSelect
export type UpdateUserProfileInput = Partial<typeof users.$inferInsert>

export const userProfileRepository = {
	async getByUserId(userId: string) {
		return await db.query.users.findFirst({
			where: eq(users.id, userId)
		})
	},

	async create(userId: string, data: UpdateUserProfileInput) {
		const [user] = await db
			.insert(users)
			.values({ id: userId, ...data })
			.returning()
		return user
	},

	async update(userId: string, data: UpdateUserProfileInput) {
		const [user] = await db
			.update(users)
			.set(data)
			.where(eq(users.id, userId))
			.returning()
		return user
	}
}
