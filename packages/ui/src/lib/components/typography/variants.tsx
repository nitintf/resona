import { variant } from 'styled-system';

import { token } from '@resona/theme';

export const colorVariant = variant({
  prop: 'color',
  key: 'colors',
  variants: {
    text: {
      color: token('color.foreground', '#1F2937'),
    },
    inverse: {
      color: token('color.text.inverse', '#FFF'),
    },
    brand: {
      color: token('color.brand'),
    },
    dim: {
      color: token('color.text.dim', '#6B778C'),
    },
    danger: {
      color: token('color.text.danger', '#DC2626'),
    },
  },
});

export type ColorVariant = 'text' | 'inverse' | 'brand' | 'dim' | 'danger';
