import { keyframes } from 'styled-components';

export const MOON_SIZE = 65;
export const CLOCK_SIZE = 300;
export const HEADER_BODY_WIDTH = 960;
export const CLOCK_COLLAPSE_HEIGHT = CLOCK_SIZE + 200;
export const ROTATE_ANIMATION = keyframes`
  100% {
    transform: rotateZ(360deg);
  }
`;
