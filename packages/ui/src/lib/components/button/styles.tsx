import styled from 'styled-components';
import { variant } from 'styled-system';

import { token } from '@resona/theme';

import { ButtonProps } from './type';

const buttonDisabled = {
  cursor: 'not-allowed',
};

const buttonLoading = {
  cursor: 'progress',
};

const buttonVariants = variant({
  prop: 'variant',
  variants: {
    solid: {
      color: 'white',
      bg: token('color.brand'),
      '&:hover, &:focus-visible': {
        bg: token('color.brand.hover'),
      },
      '&[data-loading="true"]': {
        ...buttonLoading,
      },
    },
    soft: {
      color: token('color.brand'),
      bg: token('color.brand.soft'),
      '&:hover, &:focus-visible': {
        bg: token('color.button.soft.hover'),
      },
      '&[data-loading="true"]': {
        ...buttonLoading,
      },
    },
    outline: {
      color: token('color.brand'),
      bg: 'transparent',
      border: '1px solid',
      borderColor: token('color.brand'),
      '&:hover, &:focus-visible': {
        bg: token('color.button.outline.hover'),
      },
      '&[data-loading="true"]': {
        ...buttonLoading,
      },
    },
    ghost: {
      color: token('color.brand'),
      bg: 'transparent',
      '&:hover, &:focus-visible': {
        bg: token('color.button.outline.hover'),
      },
      '&[data-loading="true"]': {
        ...buttonLoading,
      },
    },
  },
});

const buttonSizes = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: token('font.size.sm'),
      padding: `${token('space.2')} ${token('space.4')}`,
    },
    medium: {
      fontSize: token('font.size.sm'),
      padding: `${token('space.3')} ${token('space.4')}`,
    },
    large: {
      fontSize: token('font.size.base'),
      padding: `${token('space.4')} ${token('space.8')}`,
    },
  },
});

const buttonFitContainer = {
  width: '100%',
};

export const ButtonBase = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: 'none',
    borderRadius: 'var(--radius-3)',
    transition: 'background-color 0.2s, color 0.2s, box-shadow 0.2s',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus-visible': {
      outline: `solid 1.8px ${token('color.brand')}`,
      outlineOffset: '1.5px',
      transition: 'outline-color 0.2s, outline-offset 0.2s',
    },
    '&[data-fit-container="true"]': {
      ...buttonFitContainer,
    },
    '&:active': {
      transition: 'opacity 0.2s',
      opacity: 0.7,
    },
    '&:disabled': {
      ...buttonDisabled,
    },
    '&:disabled:hover': {
      opacity: 0.65,
    },
    '&[data-loading="true"]': {
      ...buttonLoading,
    },
  },
  buttonVariants,
  buttonSizes
);
