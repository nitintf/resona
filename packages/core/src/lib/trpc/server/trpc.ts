import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';

export const tRPCContext = initTRPC.context().create({
  transformer: SuperJSON,
});

export const router = tRPCContext.router;
export const mergeRouters = tRPCContext.mergeRouters;
export const middleware = tRPCContext.middleware;
export const procedure = tRPCContext.procedure;

export type TRPCSessionUser = {
  user: any;
};
