'use client';

import styled from 'styled-components';

import { token } from '@resona/theme';
import { Box, Flex } from '@resona/ui';

export const LeftRightPageLayout = styled(Flex)`
  --background: #fff;
  --foreground: #000;

  flex-flow: row;
  place-content: stretch flex-start;
  height: inherit;
`;

export const LeftColumn = styled(Flex)`
  flex-flow: row;
  place-content: stretch center;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: image-set(
    url(/login-left-panel.avif) 2x type('image/avif'),
    url(/login-left-panel.avif) 1x type('image/avif'),
    url(/login-left-panel.jpg) 1x type('image/jpeg')
  );

  @media screen and (min-width: 840px) {
    flex-basis: 33%;
    flex-grow: 0;
    max-width: 640px;
  }
`;

export const RightColumn = styled(Flex)`
  flex-grow: 1;
  background-color: ${token('color.background')};
  height: inherit;
  overflow: hidden auto;

  @media screen and (max-width: 840px) {
    flex-basis: 100%;
  }
  @media screen and (min-width: 840px) {
    flex-basis: 66%;
  }
`;

export const WelcomeFormContainer = styled(Box)`
  width: 424px;
  height: inherit;
  margin: 0px auto;
  text-align: center;
  padding: ${token('space.10')} ${token('space.6')};
`;

export const FormWrapper = styled(Flex)`
  height: inherit;
  flex-flow: column;
  place-content: stretch center;
`;
