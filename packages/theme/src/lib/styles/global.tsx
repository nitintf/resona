import { createGlobalStyle, css } from 'styled-components';

const globalStylesCss = css`
  :root {
    /* Light Theme */

    /* Colors */
    --foreground: rgb(0, 0, 0);
    --background: rgb(255, 255, 255);

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
  }

  [data-theme='dark'] {
    --foreground: rgb(255, 255, 255);
    --background: rgb(0, 0, 0);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
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
