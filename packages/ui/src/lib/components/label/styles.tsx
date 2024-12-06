import styled from 'styled-components';
import { space, typography, variant } from 'styled-system';

import { token } from '@resona/theme';

import { LabelProps } from './types';

const sizeVariant = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: token('font.size.xs'),
    },
    sm: {
      fontSize: token('font.size.sm'),
    },
    base: {
      fontSize: token('font.size.base'),
    },
    lg: {
      fontSize: token('font.size.lg'),
    },
  },
});

export const BaseLabel = styled.label<LabelProps>`
  color: ${token('color.label')};
  font-weight: 400;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;

  ${space}
  ${typography}
  ${sizeVariant}
`;
