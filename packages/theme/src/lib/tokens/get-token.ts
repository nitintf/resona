import { tokens } from './tokens';

type Tokens = typeof tokens;

const TOKEN_NOT_FOUND = '--token-not-found';

export const token = <T extends keyof Tokens>(path: T, fallback?: string) => {
  let value = tokens[path];

  if (!value) {
    value = TOKEN_NOT_FOUND;
  }

  const tokenCall = fallback ? `var(${value}, ${fallback})` : `var(${value})`;

  return tokenCall;
};
