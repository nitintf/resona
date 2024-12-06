'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';

import { publicApi } from '../../lib/api';
import { AUTH_WELCOME_CONTEXT_KEY } from '../constants';
import { getUserByEmailQuery } from '../queries/get-user-by-email.query';
import { verifyEmailSchema } from '../schemas/verify-email.schema';

const outputSchema = z.object({
  exists: z.boolean(),
  email: z.string().nullable(),
  method: z.enum(['google', 'identity']).nullable(),
});

export const checkUserExistsHandler = publicApi
  .createServerAction()
  .input(verifyEmailSchema)
  .output(outputSchema)
  .handler(async ({ input }) => {
    try {
      const email = input.email;

      const user = await getUserByEmailQuery(email);

      cookies().set(
        AUTH_WELCOME_CONTEXT_KEY,
        JSON.stringify({ email, isNewUser: !user, authCallback: '/' })
      );

      if (!user) {
        return {
          exists: false,
          email: null,
          method: null,
        };
      }

      return {
        exists: true,
        email: user.email,
        method: 'identity',
      };
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong. Please try again.');
    }
  });
