import 'react';
import type { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | undefined;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
