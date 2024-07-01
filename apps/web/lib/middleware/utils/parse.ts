import { APP_DOMAIN } from '@resona/utils';
import { NextRequest } from 'next/server';

export const parse = (req: NextRequest) => {
  let domain = req.headers.get('host') as string;
  // remove www. from domain and convert to lowercase
  domain = domain.replace('www.', '').toLowerCase();
  domain = domain.replace('.localhost:3000', `.${APP_DOMAIN}`);

  // path is the path of the URL
  const path = req.nextUrl.pathname;

  // fullPath is the full URL path (along with search params)
  const searchParams = req.nextUrl.searchParams.toString();
  const searchParamsString = searchParams.length > 0 ? `?${searchParams}` : '';
  const fullPath = `${path}${searchParamsString}`;

  // Here, we are using decodeURIComponent to handle foreign languages like Hebrew
  const key = decodeURIComponent(path.split('/')[1]);
  const fullKey = decodeURIComponent(path.slice(1));

  return { domain, path, fullPath, key, fullKey, searchParamsString };
};
