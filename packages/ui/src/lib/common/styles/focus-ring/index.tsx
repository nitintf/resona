import { css } from 'styled-components';

import { token } from '@resona/theme';

const BORDER_WIDTH = 2;

export const baseFocusOutsideStyles = {
  outline: `${BORDER_WIDTH}px solid ${token('color.border.focus')}`,
  outlineOffset: BORDER_WIDTH,
};

export const baseInsetStyles = {
  outlineColor: token('color.border.focus'),
  outlineOffset: -BORDER_WIDTH,
  outlineStyle: 'solid',
  outlineWidth: token('border.width.outline', '2px'),
};

export const focusRingStyles = css({
  // Focus styles used when :focus-visible isn't supported

  '&:focus, &:focus-visible': baseFocusOutsideStyles,

  // Remove default focus styles for mouse interactions if :focus-visible is supported
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
  '@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)':
    {
      '&:focus-visible': {
        outline: '1px solid',
      },
    },
});

export const insetFocusRingStyles = css({
  // Focus styles used when :focus-visible isn't supported
  '&:focus': baseInsetStyles,

  '&:focus-visible': baseInsetStyles,

  // Remove default focus styles for mouse interactions if :focus-visible is supported
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
  '@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)':
    {
      '&:focus-visible': {
        outline: '1px solid',
        outlineOffset: '-1px',
      },
    },
});
