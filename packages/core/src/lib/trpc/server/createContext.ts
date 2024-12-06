import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  session: any;
}

export const createInnerContext = async ({
  session,
}: CreateInnerContextOptions) => {
  return {
    session,
  };
};

export const createContext = async (opts: CreateNextContextOptions) => {
  // TODO: get user from session and user device info

  const mockSession = {
    id: '1',
    email: 'nitin@gmail.com',
  };

  const innerContext = await createInnerContext({
    session: mockSession,
  });

  return {
    ...innerContext,
    req: opts.req,
    res: opts.res,
  };
};

export type Context = Awaited<ReturnType<typeof createInnerContext>>;
