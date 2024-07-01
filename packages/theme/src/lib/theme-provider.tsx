'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { StyledComponentsRegistry } from './registry';
import { DefaultGlobalStyles } from './styles/global';

type ThemeProviderProps = React.PropsWithChildren;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemeProvider storageKey="resona-theme">
      <StyledComponentsRegistry>
        <DefaultGlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </NextThemeProvider>
  );
};
