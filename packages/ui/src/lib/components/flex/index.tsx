'use client';

import styled, { css } from 'styled-components';
import { flexBasis, flexGrow, flexWrap, variant } from 'styled-system';

import { Box, BoxProps } from '../box';

interface FlexProps extends BoxProps {
  /**
   * If true, the flex container will center its item.
   */
  center?: boolean;

  /**
   * The gap between the flex items.
   */
  gap?: number | string;
}

const centerVariant = variant({
  key: 'center',
  prop: 'center',
  variants: {
    true: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

const gap = (props: FlexProps) => css({ gap: props.gap });

export const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  gap,
  flexWrap,
  flexGrow,
  flexBasis,
  centerVariant
);
