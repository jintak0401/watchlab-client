import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import { useEffect, useRef } from 'react';
import tw, { css, styled } from 'twin.macro';

import { CLOCK_SIZE } from '@/styles/header';

const HAND_SIZE = CLOCK_SIZE * 0.215;

const ZodiacClock = () => {
  const handRotatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let degree = -1;

    const rotateHand = () => {
      if (handRotatorRef.current) {
        degree === -1
          ? (degree = getRotateDegree(new Date().getHours()))
          : (degree += 30);
        handRotatorRef.current.style.transform = `rotate(${degree}deg)`;
      }
    };

    timeout = setTimeout(() => {
      timeout && clearTimeout(timeout);
      const date = new Date();
      const curHour = date.getHours();
      const nextHour = Math.floor((curHour + 1) / 2) * 2 + 1;
      date.setHours(nextHour, 0, 0);
      const remain = Number(date) - Number(new Date());

      timeout = setTimeout(() => {
        rotateHand();
        // every 2 hours
        interval = setInterval(() => {
          rotateHand();
        }, 1000 * 60 * 60 * 2);
      }, remain);
    }, 100);

    return () => {
      timeout && clearTimeout(timeout);
      interval && clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <NextImage
        src={siteMetadata.images.clock.zodiacClockPlate}
        alt={'zodiac clock'}
        width={CLOCK_SIZE}
        height={CLOCK_SIZE}
      />
      <HandPositioner>
        <HandRotator ref={handRotatorRef}>
          <NextImage
            css={css`
              object-fit: contain;
              height: ${HAND_SIZE}px;
            `}
            src={siteMetadata.images.clock.zodiacClockHand}
            alt={'zodiac clock hand'}
            width={1000}
            height={1000}
          />
        </HandRotator>
      </HandPositioner>
    </Container>
  );
};

const getRotateDegree = (hour: number) => {
  if (hour === 0 || hour === 23) return 0;
  return Math.floor((hour + 1) / 2) * 30;
};

const Container = styled.div`
  position: relative;
  width: ${CLOCK_SIZE}px;
  height: ${CLOCK_SIZE}px;
`;

const HandPositioner = styled.div(() => [
  tw`absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2`,
  css`
    width: ${1.54 * HAND_SIZE}px;
  `,
]);

const HandRotator = tw.div`flex h-full w-full items-start justify-center transition-transform`;

export default ZodiacClock;
