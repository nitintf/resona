'use client';

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
      align = 'center',
      id,
      size = 'base',
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
        size={size}
        align={align}
        weight={weight}
        color={color}
        {...props}
      />
    );
  }
);
