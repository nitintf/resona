# Resona Theme

The Resona Theme framework

### Usage

Components require that your app be wrapped in a `<AppThemeProvider />`

### Adding New CSS Variables to the Theme

When introducing new CSS variables to the theme, it's essential to add them to the [`tokens.ts`](../theme/src/lib/tokens/tokens.ts) file. This ensures that the new variables are accessible throughout the theme system. After adding the variables to `tokens.ts`, you can utilize them in your components or styles by leveraging the `token` function exported from [`get-token.ts`](../theme/src/lib/tokens/get-token.ts).

For example, to use the `color.background` variable, you can call the `token` function as follows:

```ts
import { token } from '@resona/theme';
import styled from 'styled-components'

const backgroundColor = token('color.background');

// OR

const StyledDiv = styled.div`
  color: token('color.foreground');
`;

```
