import { cookies } from 'next/headers';

import { AUTH_WELCOME_CONTEXT_KEY } from '@resona/core/auth';

export const getAuthEmailFromCookie = () => {
  const context = cookies().get(AUTH_WELCOME_CONTEXT_KEY)?.value;
  const email = context ? JSON.parse(context || '')?.email : null;
  return email;
};
