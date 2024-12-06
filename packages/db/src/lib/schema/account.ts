import {
  boolean,
  index,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from 'drizzle-orm/pg-core';

import { usersTable } from './user';

export enum AUTH_PROVIDERS {
  CREDENTIALS = 'credentials',
  GOOGLE = 'google',
}

export enum ACCOUNT_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

const providerEnum = pgEnum('provider', [
  AUTH_PROVIDERS.CREDENTIALS,
  AUTH_PROVIDERS.GOOGLE,
]);

const statusEnum = pgEnum('status', [
  ACCOUNT_STATUS.ACTIVE,
  ACCOUNT_STATUS.INACTIVE,
  ACCOUNT_STATUS.DELETED,
]);

export const accountsTable = pgTable(
  'accounts',
  {
    id: uuid('id').primaryKey(),
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' })
      .unique(),

    verified: boolean('verified').notNull().default(false),

    status: statusEnum('status').notNull().default(ACCOUNT_STATUS.ACTIVE),
    provider: providerEnum('provider'),
    providerId: text('provider_id'),
    providerAccountId: text('provider_account_id'),
    lastLoginAt: timestamp('last_login_at').notNull().defaultNow(),

    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at'),
  },
  (table) => {
    return {
      userIdIdx: index('user_id_idx').on(table.userId),
      providerAccountUnique: unique('provider_account_unique').on(
        table.providerId,
        table.providerAccountId
      ),
    };
  }
);
