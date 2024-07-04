import { tokens } from './tokens';

type Tokens = typeof tokens;

const TOKEN_NOT_FOUND = '--token-not-found';

export const token = <T extends keyof Tokens | string>(
  path: T,
  fallback?: string
) => {
  let value: Tokens[keyof Tokens] = tokens[path as keyof Tokens];

  if (!value) {
    value = TOKEN_NOT_FOUND;
  }

  const tokenCall = fallback ? `var(${value}, ${fallback})` : `var(${value})`;

  return tokenCall;
};
