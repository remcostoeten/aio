/*
import { relations, sql } from 'drizzle-orm'
import { pgTable, text, timestamp, uuid, varchar, boolean } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 256 }).unique().notNull(),
    role: varchar('role', { length: 50 }).notNull().default('user'),
    isActive: boolean('is_active').default(true),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`)
})

export const profiles = pgTable('profiles', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    firstName: varchar('first_name', { length: 256 }).notNull(),
    lastName: varchar('last_name', { length: 256 }).notNull(),
    avatarUrl: text('avatar_url'),
    preferences: jsonb('preferences').default({}),
    updatedAt: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`)
})

export const sessions = pgTable('sessions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').references(() => users.id).notNull(),
    token: text('token').notNull(),
    lastActive: timestamp('last_active').default(sql`CURRENT_TIMESTAMP`),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    userAgent: text('user_agent'),
    ipAddress: varchar('ip_address', { length: 45 })
})

// Relations
export const usersRelations = relations(users, ({ one }) => ({
    profile: one(profiles, {
        fields: [users.id],
        references: [profiles.userId],
    }),
}))

export const profilesRelations = relations(profiles, ({ one }) => ({
    user: one(users, {
        fields: [profiles.userId],
        references: [users.id],
    }),
}))

export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, {
        fields: [sessions.userId],
        references: [users.id],
    }),
}))
*/ 
