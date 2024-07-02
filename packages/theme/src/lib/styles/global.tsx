import { createGlobalStyle, css } from 'styled-components';

const globalStylesCss = css`
  :root {
    /* Light Theme */

    /* Colors */
    --foreground: rgb(0, 0, 0);
    --background: rgb(255, 255, 255);
    --brand: rgb(91, 83, 255);
    --danger: rgb(239, 68, 68);

    /* Border Color */
    --border-input: --brand;
    --border-focused: --brand;
    --border: rgb(229, 231, 235);
    --border-error: --danger

    /* Font sizes */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;

    /* Spaces */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-7: 1.75rem;
    --space-8: 2rem;
    --space-9: 2.25rem;
    --space-10: 2.5rem;

    /* Radius */
    --radius-1: 0.125rem;
    --radius-2: 0.25rem;
    --radius-3: 0.375rem;
    --radius-4: 0.5rem;
    --radius-5: 0.625rem;
    --radius-full: 9999px;

    /* Border Width */
    --border-width-1: 1px;
    --border-width-2: 2px;
    --border-width-3: 3px;
  }

  [data-theme='dark'] {
    --foreground: rgb(255, 255, 255);
    --background: rgb(0, 0, 0);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;

    color: var(--foreground);
    background-color: var(--background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export const DefaultGlobalStyles = createGlobalStyle`${globalStylesCss}`;
