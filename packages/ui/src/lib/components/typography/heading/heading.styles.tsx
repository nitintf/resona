import styled, { css } from 'styled-components';
import { layout, typography, variant } from 'styled-system';

import { token } from '@resona/theme';

import { colorVariant } from '../variants';
import { HeadingProps } from './heading.types';

export const headingResetStyles = css({
  letterSpacing: 'normal',
  marginBlock: 0,
  textTransform: 'none',
});

export const levelMap = {
  h900: 'h1',
  h800: 'h1',
  h700: 'h2',
  h600: 'h3',
  h500: 'h4',
  h400: 'h5',
  h300: 'h6',
  h200: 'div',
  h100: 'div',
} as const;

const headingVariants = variant({
  prop: 'size',
  key: 'heading',
  variants: {
    h900: {
      fontSize: token('font.size.600', '35px'),
      fontWeight: token('font.weight.medium', '500'),
      letterSpacing: '-0.01em',
      lineHeight: token('font.lineHeight.600', '40px'),
    },
    h800: {
      fontSize: token('font.size.500', '29px'),
      fontWeight: token('font.weight.semibold', '600'),
      letterSpacing: '-0.01em',
      lineHeight: token('font.lineHeight.500', '32px'),
    },
    h700: {
      fontSize: token('font.size.400', '24px'),
      fontWeight: token('font.weight.medium', '500'),
      letterSpacing: '-0.01em',
      lineHeight: token('font.lineHeight.400', '28px'),
    },
    h600: {
      fontSize: token('font.size.300', '20px'),
      fontWeight: token('font.weight.medium', '500'),
      letterSpacing: '-0.008em',
      lineHeight: token('font.lineHeight.300', '24px'),
    },
    h500: {
      fontSize: token('font.size.200', '16px'),
      fontWeight: token('font.weight.semibold', '600'),
      letterSpacing: '-0.006em',
      lineHeight: token('font.lineHeight.200', '20px'),
    },
    h400: {
      fontSize: token('font.size.100', '14px'),
      fontWeight: token('font.weight.semibold', '600'),
      letterSpacing: '-0.003em',
      lineHeight: token('font.lineHeight.100', '16px'),
    },
    h300: {
      fontSize: token('font.size.075', '12px'),
      fontWeight: token('font.weight.semibold', '600'),
      letterSpacing: 0,
      lineHeight: token('font.lineHeight.100', '16px'),
      textTransform: 'uppercase',
    },
    h200: {
      fontSize: token('font.size.050', '11px'),
      fontWeight: token('font.weight.bold', '700'),
      letterSpacing: 0,
      lineHeight: token('font.lineHeight.100', '16px'),
    },
    h100: {
      fontSize: token('font.size.025', '10px'),
      fontWeight: token('font.weight.bold', '700'),
      letterSpacing: 0,
      lineHeight: token('font.lineHeight.100', '16px'),
    },
  },
});

export const BaseHeading = styled.h1<HeadingProps>`
  ${headingResetStyles}

  ${headingVariants}
  ${colorVariant}

  ${layout}
  ${typography}
`;
