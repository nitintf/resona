import { forwardRef } from 'react';

import { Spinner } from '../spinner';
import { ButtonBase } from './styles';
import { ButtonProps } from './type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'medium',
      isLoading,
      shouldFitContainer,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonBase
        variant={variant}
        size={size}
        aria-disabled={disabled ? disabled : undefined}
        data-fit-container={shouldFitContainer ? shouldFitContainer : undefined}
        data-loading={isLoading ? isLoading : undefined}
        data-disabled={disabled ? disabled : undefined}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading ? <Spinner /> : props.children}
      </ButtonBase>
    );
  }
);
