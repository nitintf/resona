import { PropsWithChildren } from 'react';

type Variant = 'solid' | 'soft' | 'outline' | 'ghost';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Specifies the size of the button.
   */
  size?: Size;

  /**
   * Defines the visual style of the button.
   */
  variant?: Variant;

  /**
   * If true, indicates that the button is in a loading state.
   */
  isLoading?: boolean;

  /**
   * If true, indicates that the button is disabled.
   */
  disabled?: boolean;

  /**
   * Option to fit button width to its parent width.
   */
  shouldFitContainer?: boolean;
}
