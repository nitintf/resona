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
    large: {
      fontSize: token(
        'font.body.large',
        'normal 400 16px/24px ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif'
      ),
    },
    medium: {
      fontSize: token(
        'font.body',
        'normal 400 14px/20px ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif'
      ),
    },
    small: {
      fontSize: token(
        'font.body.small',
        'normal 400 11px/16px ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif'
      ),
    },
    UNSAFE_small: {
      fontSize: token(
        'font.body.UNSAFE_small',
        'normal 400 12px/16px ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif'
      ),
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

  ${alignVariant}
  ${fontSizeVariant}
  ${fontWeightVariant}
  ${colorVariant}

  ${space}
  ${typography}
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
