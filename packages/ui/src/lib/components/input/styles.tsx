import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { N10, N70, R400, token } from '@resona/theme';

import { Appearance, InputProps } from './types';

const backgroundColor = {
  standard: token('color.background.input', N10),
  subtle: 'transparent',
  none: 'transparent',
};

const borderColor = {
  standard: token('color.border.input'),
  subtle: 'transparent',
  none: 'transparent',
};

const borderHoveredColor = {
  standard: token('color.border.input.hovered'),
  subtle: token('color.border.input'),
  none: token('color.border.input'),
};

const getApperanceStyles = (appearance: Appearance) => ({
  backgroundColor: backgroundColor[appearance],
  boxShadow: `0 0 0 ${token('border.width', '1.3px')} ${
    borderColor[appearance]
  }`,
  '&:hover:not([data-disabled])': {
    boxShadow: `0 0 0 ${token('border.width', '1.7px')} ${
      borderHoveredColor[appearance]
    }`,
  },
  '&:focus-within:not([data-disabled])': {
    outlineOffset: '12px',
    transition: 'box-shadow 0.35s cubic-bezier(0.2, 0.4, 0.1, 1) 0s',
    boxShadow: `0 0 0 ${token('border.width', '2px')} ${token(
      'color.border.focused'
    )}`,
  },

  '&[data-disabled]': {
    color: token('color.text.disabled', N70),
    cursor: 'not-allowed',
    // Disabled background and border styles should not be applied to components that
    // have either no background or transparent background to begin with
    ...(appearance === 'standard' && {
      backgroundColor: token('color.background.disabled', N10),
      borderColor: token('color.background.disabled', N10),
    }),
  },
  '&[data-invalid], &[data-invalid]:hover': {
    boxShadow: `0 0 0 ${token('border.width', '1px')} ${token(
      'color.border.danger',
      R400
    )}`,
  },
  '&[data-invalid]:focus-within': {
    boxShadow: `0 0 0 ${token('border.width', '2px')} ${token(
      'color.border.focused'
    )}`,
  },
  '@media screen and (-ms-high-contrast: active)': {
    '&[data-invalid]:focus-within': {
      borderColor: 'Highlight',
    },
    '&:focus-within': {
      borderColor: 'Highlight',
    },
    '&[data-disabled]': {
      borderColor: 'GrayText',
    },
  },
});

const inputVariants = variant({
  prop: 'appearance',
  key: 'input',
  variants: {
    standard: getApperanceStyles('standard'),
    subtle: getApperanceStyles('subtle'),
    none: getApperanceStyles('none'),
  },
});

export const InputContainer = styled.div<InputProps>(
  {
    color: token('color.text'),
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: token('border.width', '1px'),
    boxSizing: 'border-box',
    display: 'flex',
    flex: '1 1 100%',
    font: token('font.body'),
    justifyContent: 'space-between',
    overflow: 'hidden',
    transition: `box-shadow 0.35s cubic-bezier(0.2, 0.4, 0.1, 1) 0s, color 0.25s cubic-bezier(0.2, 0.4, 0.1, 1) 0s, background-color 0.25s cubic-bezier(0.2, 0.4, 0.1, 1) 0s`,
    wordWrap: 'break-word',
    verticalAlign: 'top',
    pointerEvents: 'auto',
  },
  inputVariants
);

export const inputStyles = css({
  backgroundColor: 'transparent',
  border: 0,
  boxSizing: 'border-box',
  color: 'inherit',
  cursor: 'inherit',
  minWidth: 0,
  outline: 'none',
  width: '100%',
  borderRadius: token('radius.2'),
  fontSize: token('font.size.sm'),

  '&[data-monospaced]': {
    fontFamily: token('font.family.code'),
  },
  '&[data-compact]': {
    padding: `${token('space.050', '4px')} ${token('space.075', '6px')}`,
  },
  '&:not([data-compact])': {
    padding: `${token('space.100', '10px')} ${token('space.075', '8px')}`,
  },
  '&[disabled]': {
    // Safari (WebKit) adds a -webkit-text-fill-color style to disabled inputs
    // which takes priority over color and makes the text unreadable. Need to
    // override it with the color we want.
    WebkitTextFillColor: token('color.text.disabled', N70),
  },
  // Hide the clear indicator on Edge (Windows only)
  '&::-ms-clear': {
    display: 'none',
  },
  '&:invalid': {
    boxShadow: 'none',
  },
  '&:placeholder-shown': {
    textOverflow: 'ellipsis',
  },
  '&::placeholder': {
    color: token('color.text.subtle'),
    '&:disabled': {
      color: token('color.text.disabled', N70),
    },
  },
  '@media screen and (-ms-high-contrast: active)': {
    '&[disabled]': {
      color: 'GrayText',
    },
  },
});
