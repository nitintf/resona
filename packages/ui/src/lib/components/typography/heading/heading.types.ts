import { HTMLAttributes, ReactNode } from 'react';
import { LayoutProps, TypographyProps } from 'styled-system';

import { ColorVariant } from '../variants';
import { levelMap } from './heading.styles';

export type HeadingColor =
  | 'color.foreground'
  | 'color.brand'
  | 'color.text.inverse';

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    LayoutProps,
    TypographyProps {
  /**
   * The text of the heading.
   */
  children: ReactNode;
  /**
   * Allows the component to be rendered as the specified DOM element, overriding a default element set by `level` prop.
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  /**
   * Token representing text color with a built-in fallback value.
   * Will apply inverse text color automatically if placed within a Box with bold background color.
   * Defaults to `color.text`.
   */
  color?: ColorVariant;
  /**
   * Heading size. This value is detached from the specific heading level applied to allow for more flexibility.
   * Use instead of the deprecated `level` prop.
   *
   */
  size: keyof typeof levelMap;
}
