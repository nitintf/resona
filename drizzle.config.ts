import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schema: './packages/db/src/lib/schema/*.ts',
  out: './packages/db/src/lib/drizzle',
  breakpoints: true,
});
