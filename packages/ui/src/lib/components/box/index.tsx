'use client';

import styled from 'styled-components';
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  color,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
`;
