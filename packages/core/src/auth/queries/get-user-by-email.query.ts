'use server';

import { eq } from 'drizzle-orm';

import { db, usersTable } from '@resona/db';

export const getUserByEmailQuery = async (email: string) => {
  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1);

  return users[0];
};
