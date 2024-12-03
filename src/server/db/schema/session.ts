/**
 * @author Remco Stoeten
 * @description User session schema for auth management
 */

// Mock types
export type Session = {
    id: string
    userId: string
    token: string
    lastActive: Date
    expiresAt: Date
    createdAt: Date
    userAgent?: string
    ipAddress?: string
    device?: {
        id: string
        name: string
        type: 'mobile' | 'desktop' | 'tablet'
        os?: string
        browser?: string
    }
    refreshToken?: string
    isValid: boolean
}

export type CreateSessionInput = Omit<Session, 'id' | 'createdAt' | 'lastActive'>
export type UpdateSessionInput = Partial<Omit<Session, 'id' | 'createdAt'>>

// Real implementation with Drizzle
/*
import { relations, sql } from 'drizzle-orm'
import { 
    boolean,
    index,
    json,
    pgTable, 
    text, 
    timestamp, 
    uuid, 
    varchar 
} from 'drizzle-orm/pg-core'
import { users } from './user'

export const sessions = pgTable('sessions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    token: text('token').notNull(),
    refreshToken: text('refresh_token'),
    lastActive: timestamp('last_active')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    userAgent: text('user_agent'),
    ipAddress: varchar('ip_address', { length: 45 }),
    device: json('device').$type<{
        id: string
        name: string
        type: 'mobile' | 'desktop' | 'tablet'
        os?: string
        browser?: string
    }>(),
    isValid: boolean('is_valid').default(true).notNull(),
}, (table) => ({
    userIdIdx: index('user_id_idx').on(table.userId),
    tokenIdx: index('token_idx').on(table.token),
    expiresAtIdx: index('expires_at_idx').on(table.expiresAt)
}))

// Relations
export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, {
        fields: [sessions.userId],
        references: [users.id],
    }),
}))

// Queries
export const sessionQueries = {
    findValidByToken: async (db: DB, token: string) => {
        const now = new Date()
        return await db.query.sessions.findFirst({
            where: (sessions, { and, eq, gt }) => and(
                eq(sessions.token, token),
                eq(sessions.isValid, true),
                gt(sessions.expiresAt, now)
            ),
            with: {
                user: true
            }
        })
    },
    
    invalidateAllUserSessions: async (db: DB, userId: string) => {
        return await db
            .update(sessions)
            .set({ isValid: false })
            .where(eq(sessions.userId, userId))
    },
    
    cleanupExpiredSessions: async (db: DB) => {
        const now = new Date()
        return await db
            .delete(sessions)
            .where(lt(sessions.expiresAt, now))
    }
}

// Mutations
export const sessionMutations = {
    create: async (db: DB, input: CreateSessionInput) => {
        const [session] = await db
            .insert(sessions)
            .values(input)
            .returning()
        return session
    },
    
    update: async (db: DB, id: string, input: UpdateSessionInput) => {
        const [session] = await db
            .update(sessions)
            .set(input)
            .where(eq(sessions.id, id))
            .returning()
        return session
    },
    
    delete: async (db: DB, id: string) => {
        const [session] = await db
            .delete(sessions)
            .where(eq(sessions.id, id))
            .returning()
        return session
    }
}
*/
