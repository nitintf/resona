'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import { AppThemeProvider } from '@resona/theme';

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <AppThemeProvider>{children}</AppThemeProvider>
    </QueryClientProvider>
  );
};
