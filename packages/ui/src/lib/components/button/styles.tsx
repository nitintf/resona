import styled from 'styled-components';
import { variant } from 'styled-system';

import { token } from '@resona/theme';

import { ButtonProps } from './type';

const buttonDisabled = {
  cursor: 'not-allowed',
  backgroundColor: token('color.button.disabled'),
  color: token('color.text.disabled'),
  boxShadow: `0 0 0 1px ${token('color.text.disabled')}`,
};

const buttonVariants = variant({
  prop: 'variant',
  variants: {
    solid: {
      color: 'white',
      bg: token('color.brand'),
      '&:hover': {
        bg: token('color.brand.hover'),
      },
      '&:disabled': {
        ...buttonDisabled,
      },
      '&:disabled:hover': {
        backgroundColor: token('color.button.disabled'),
      },
      '&[data-loading="true"]': {
        ...buttonDisabled,
      },
    },
    soft: {
      color: token('color.brand'),
      bg: token('color.brand.soft'),
      '&:hover': {
        bg: token('color.button.soft.hover'),
      },
    },
    outline: {
      color: token('color.brand'),
      bg: 'transparent',
      border: '1px solid',
      borderColor: token('color.brand'),
      '&:hover': {
        bg: token('color.button.outline.hover'),
      },
    },
    ghost: {
      color: token('color.brand'),
      bg: 'transparent',
      '&:hover': {
        bg: token('color.button.outline.hover'),
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
    '&:focus': {
      outline: 'none',
    },
    '&[data-fit-container="true"]': {
      ...buttonFitContainer,
    },
  },
  buttonVariants,
  buttonSizes
);
