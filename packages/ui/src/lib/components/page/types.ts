import { PropsWithChildren } from 'react';

export interface PageProps extends PropsWithChildren {
  /**
   * A unique string that appears as a data attribute `data-testid` in the rendered code. Serves as a hook for automated tests.
   */
  testId?: string;
}
