import styled, { css } from 'styled-components';
import { space, typography, variant } from 'styled-system';

import { token } from '@resona/theme';

import { colorVariant } from '../variants';
import { TextProps } from './text.type';

export const alignVariant = variant({
  prop: 'align',
  key: 'align',
  variants: {
    center: {
      textAlign: 'center',
    },
    end: {
      textAlign: 'end',
    },
    start: {
      textAlign: 'start',
    },
  },
});

export const fontSizeVariant = variant({
  prop: 'size',
  key: 'fontSize',
  variants: {
    xs: {
      fontSize: token('font.size.xs', '12px'),
    },
    sm: {
      fontSize: token('font.size.sm', '14px'),
    },
    base: {
      fontSize: token('font.size.base', '16px'),
    },
    helper: {
      fontSize: token('font.size.xs', '12px'),
    },
  },
});

export const fontWeightVariant = variant({
  prop: 'weight',
  key: 'fontWeight',
  variants: {
    bold: {
      fontWeight: token('font.weight.bold', '700'),
    },
    medium: {
      fontWeight: token('font.weight.medium', '500'),
    },
    regular: {
      fontWeight: token('font.weight.regular', '400'),
    },
    semibold: {
      fontWeight: token('font.weight.semibold', '600'),
    },
  },
});

export const BaseText = styled.p<TextProps>`
  margin-block: 0;
  letter-spacing: normal;
  text-transform: none;
  margin: 0;
  overflow-wrap: 'anywhere';

  ${space}
  ${typography}

  ${fontSizeVariant}
  ${fontWeightVariant}
  ${colorVariant}
  ${alignVariant}
`;

export const truncationStyles = css({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
});

export const breakAllStyles = css({ wordBreak: 'break-all' });

export const strongStyles = css({
  fontWeight: 'bold',
});

export const emStyles = css({
  fontStyle: 'italic',
});
