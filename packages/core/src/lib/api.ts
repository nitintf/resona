import { createServerActionProcedure } from 'zsa';

import { getApiContext } from './context';

const TIME_OUT = 10000;

export const publicApi = createServerActionProcedure()
  .timeout(TIME_OUT)
  .handler(async () => {
    const ctx = getApiContext();
    return ctx;
  });

export const authenticatedApi = createServerActionProcedure()
  .timeout(TIME_OUT)
  .handler(async () => {
    const ctx = getApiContext();
    return ctx;
  });
