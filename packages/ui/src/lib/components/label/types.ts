import { SpaceProps, TypographyProps } from 'styled-system';

export interface LabelProps
  extends React.HTMLAttributes<HTMLLabelElement>,
    SpaceProps,
    TypographyProps,
    React.PropsWithChildren {
  /**
   * The `htmlFor` attribute of the label.
   */
  htmlFor?: string;

  /**
   * The size of the label.
   */
  size?: 'xs' | 'sm' | 'base' | 'lg';
}
