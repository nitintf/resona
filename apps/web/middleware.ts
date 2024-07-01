import { APP_HOSTNAMES } from '@resona/utils';
import { NextRequest, NextResponse } from 'next/server';
import { parse } from './lib/middleware/utils/parse';
import AppMiddleware from './lib/middleware/app';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const { domain, fullPath } = parse(req);

  if (APP_HOSTNAMES.has(domain)) {
    return AppMiddleware(req);
  }

  // rewrite everything else to the default domain
  const url = new URL(`${fullPath}`, req.url);

  return NextResponse.rewrite(url);
}
