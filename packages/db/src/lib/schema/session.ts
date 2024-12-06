import { inet, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { usersTable } from './user';

export const sessionTable = pgTable('session', {
  id: uuid('id').primaryKey(),
  userId: uuid('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  ipAddress: inet('ip_address').notNull(),
  userAgent: text('user_agent').notNull(),
});
