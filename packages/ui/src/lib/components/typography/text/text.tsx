import { Ref, forwardRef } from 'react';

import {
  BaseText,
  breakAllStyles,
  emStyles,
  strongStyles,
  truncationStyles,
} from './text.styles';
import { TextProps } from './text.type';

export const Text = forwardRef(
  (
    {
      as = 'span',
      align,
      id,
      size = 'medium',
      weight,
      maxLines,
      color = 'text',
      ...props
    }: TextProps,
    ref: Ref<any>
  ) => {
    const role = as === 'p' ? 'paragraph' : 'text';
    const ariaLabel =
      typeof props.children === 'string' ? props.children : undefined;

    return (
      <BaseText
        ref={ref}
        as={as}
        role={role}
        aria-label={ariaLabel}
        css={[
          maxLines && truncationStyles,
          maxLines === 1 && breakAllStyles,
          as === 'em' && emStyles,
          as === 'strong' && strongStyles,
        ]}
        style={{
          WebkitLineClamp: maxLines,
        }}
        color={color}
        {...props}
      />
    );
  }
);
