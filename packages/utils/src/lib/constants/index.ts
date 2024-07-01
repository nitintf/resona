export const SHORT_DOMAIN =
  process.env['NEXT_PUBLIC_APP_SHORT_DOMAIN'] || 'resona.io';

export const APP_DOMAIN = process.env['NEXT_PUBLIC_APP_DOMAIN'] || 'resona.io';

export const APP_HOSTNAMES = new Set([
  `app.${APP_DOMAIN}`,
  'localhost:8888',
  'app.localhost:3000',
  'localhost',
]);

export const AUTH_HOSTNAMES = new Set([
  `auth.${APP_DOMAIN}`,
  'auth.localhost:3000',
  'localhost:8888',
  'localhost',
]);
