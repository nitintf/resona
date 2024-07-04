import { Ref, forwardRef } from 'react';

import { BaseHeading } from './heading.styles';
import { HeadingProps } from './heading.types';

export const Heading = forwardRef(
  ({ color = 'text', ...props }: HeadingProps, ref: Ref<any>) => {
    return <BaseHeading role="heading" ref={ref} color={color} {...props} />;
  }
);
