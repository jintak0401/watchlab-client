import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import { css, styled } from 'twin.macro';

import { CLOCK_SIZE } from '@/styles/header';

const ROTATE_SIZE = CLOCK_SIZE * 0.7;

const WorldClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // this code is solving the problem of difference between server and client
    const timeout = setTimeout(() => {
      setDate(new Date());
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <NextImage
        src={siteMetadata.images.clock.worldClockPlate}
        alt={'world clock'}
        width={CLOCK_SIZE}
        height={CLOCK_SIZE}
      />
      <RotatePositioner>
        <RotateRotator>
          <NextImage
            css={css`
              rotate: ${getRotateDegree(date.getHours(), date.getMinutes())}deg;
            `}
            src={siteMetadata.images.clock.worldClockRotate}
            alt={'world clock'}
            width={ROTATE_SIZE}
            height={ROTATE_SIZE}
          />
        </RotateRotator>
      </RotatePositioner>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: ${CLOCK_SIZE}px;
  height: ${CLOCK_SIZE}px;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const getRotateDegree = (hour: number, minute: number) => {
  return (hour - 12) * 15 + minute * 0.25;
};

const RotatePositioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${ROTATE_SIZE}px;
  height: ${ROTATE_SIZE}px;
`;

const RotateRotator = styled.div`
  animation: ${rotate} 24h linear infinite;
`;

export default WorldClock;
