import { index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    fullName: text('full_name').notNull(),
    email: text('email').notNull().unique(),

    passwordHash: text('password_hash'),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at'),
  },
  (table) => {
    return {
      emailIdx: index('email_idx').on(table.email),
    };
  }
);
