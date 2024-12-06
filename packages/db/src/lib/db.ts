import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' });

const DATABASE_URL = process.env['DATABASE_URL'] as string;

const client = postgres(DATABASE_URL, { prepare: false });

export const db = drizzle(client);
