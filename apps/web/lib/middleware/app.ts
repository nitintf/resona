import { parse } from './utils/parse';
import { NextRequest, NextResponse } from 'next/server';

export default async function AppMiddleware(req: NextRequest) {
  const { fullPath } = parse(req);
  // otherwise, rewrite the path to /app.resona.io
  return NextResponse.rewrite(new URL(`/app.resona.io${fullPath}`, req.url));
}
