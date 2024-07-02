import styled from 'styled-components';

import { token } from '@resona/theme';

export const Input = styled.input`
  flex: 1;
  height: 2.5rem; /* 40px */
  width: 100%;
  border-radius: ${token('radius.3')};
  border: 1px solid ${token('color.border.input')};
  background-color: ${token('color.background')};
  padding: ${token('space.2')} ${token('space.3')}; /* 8px 12px */
  font-size: ${token('font.size.sm')};

  &:focus-visible {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
