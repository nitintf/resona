import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
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