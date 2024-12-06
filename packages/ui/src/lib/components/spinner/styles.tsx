import styled, { keyframes } from 'styled-components';

import { N0 } from '@resona/theme';

const spinningTickAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
`;

export const SpinnerTick = styled.span`
  position: absolute;
  top: 0;
  left: calc(50% - 12.5% / 2);
  width: 12.5%;
  height: 100%;
  animation: ${spinningTickAnimation} var(--spinner-animation-duration) linear
    infinite;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 30%;
    border-radius: var(--radius-1);
    background-color: ${N0};
  }

  &:where(:nth-child(1)) {
    transform: rotate(0deg);
    animation-delay: calc(-8 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(2)) {
    transform: rotate(45deg);
    animation-delay: calc(-7 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(3)) {
    transform: rotate(90deg);
    animation-delay: calc(-6 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(4)) {
    transform: rotate(135deg);
    animation-delay: calc(-5 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(5)) {
    transform: rotate(180deg);
    animation-delay: calc(-4 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(6)) {
    transform: rotate(225deg);
    animation-delay: calc(-3 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(7)) {
    transform: rotate(270deg);
    animation-delay: calc(-2 / 8 * var(--spinner-animation-duration));
  }
  &:where(:nth-child(8)) {
    transform: rotate(315deg);
    animation-delay: calc(-1 / 8 * var(--spinner-animation-duration));
  }
`;

export const BaseSpinner = styled.span`
  --spinner-animation-duration: 800ms;
  --spinner-opacity: 0.65;

  display: block;
  position: relative;
  opacity: var(--spinner-opacity);
  margin: 0 auto;
  width: 1.1rem;
  height: 1.1rem;
`;
