import { HTMLAttributes, ReactNode } from 'react';
import { SpaceProps, TypographyProps } from 'styled-system';

import { ColorVariant } from '../variants';

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    TypographyProps,
    SpaceProps {
  /**
   * HTML tag to be rendered. Defaults to `span`.
   */
  as?: 'p' | 'strong' | 'span' | 'em';
  /**
   * Elements rendered within the Text element.
   */
  children: ReactNode;
  /**
   * The number of lines to limit the provided text to. Text will be truncated with an ellipsis.
   *
   * When `maxLines={1}`, `wordBreak` defaults to `break-all` to match the behaviour of `text-overflow: ellipsis`.
   */
  maxLines?: number;
  /**
   * Text alignment.
   */
  align?: 'center' | 'end' | 'start';
  /**
   * Text size.
   */
  size?: 'large' | 'medium' | 'small' | 'UNSAFE_small';
  /**
   * The [HTML `font-weight` attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
   */
  weight?: 'bold' | 'medium' | 'regular' | 'semibold';

  color?: ColorVariant;
}
