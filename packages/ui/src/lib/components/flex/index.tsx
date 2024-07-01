'use client';

import { variant } from 'styled-system';
import { Box, BoxProps } from '../box';
import styled from 'styled-components';

interface FlexProps extends BoxProps {
  /**
   * If true, the flex container will center its item.
   */
  center?: boolean;
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

export const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  centerVariant
);
