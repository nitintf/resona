import { AnyRouter } from '@trpc/server';
import { createNextApiHandler as _createNextApiHandler } from '@trpc/server/adapters/next';
import { z } from 'zod';

import { createContext } from './createContext';

export function createNextApiHandler(
  router: AnyRouter,
  isPublic = false,
  namespace = ''
) {
  return _createNextApiHandler({
    router,

    /**
     * @link https://trpc.io/docs/context
     */
    createContext,

    /**
     * @link https://trpc.io/docs/error-handling
     */
    onError({ error }) {
      // TODO: add more error handling and error constants
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        // TODO: send to bug reporting (sentry)
        console.error('Something went wrong', error);
      }
    },

    batching: {
      enabled: true,
    },

    responseMeta({ ctx, errors, type, paths }) {
      const allOk = errors.length === 0;
      const isQuery = type === 'query';
      const noHeaders = {};

      if (!ctx.res) return noHeaders;

      const defaultHeaders: Record<'headers', Record<string, string>> = {
        headers: {},
      };

      const timezone = z
        .string()
        .safeParse(ctx.req?.headers['x-vercel-ip-timezone']);
      if (timezone.success)
        defaultHeaders.headers['x-resona-timezone'] = timezone.data;

      // We need all these conditions to be true to set cache headers
      if (!(isPublic && allOk && isQuery)) return defaultHeaders;

      return defaultHeaders;
    },
  });
}
