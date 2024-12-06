'use client';

import { forwardRef } from 'react';

import { BaseLabel } from './styles';
import { LabelProps } from './types';

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ size = 'sm', ...props }, ref) => {
    return <BaseLabel ref={ref} size={size} {...props} />;
  }
);
