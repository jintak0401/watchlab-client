'use client';

import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import tw, { css, styled } from 'twin.macro';

import { CLOCK_SIZE } from '@/utils/constants';
import { calcClockRotate } from '@/utils/time';

type THandType = 'h' | 'm' | 's';

const ANIMATION: { [key in THandType]: string } = {
  h: '43200s infinite linear',
  m: '3600s infinite linear',
  s: '60s infinite linear',
};

const Clock = () => {
  const { plate, hourHand, minuteHand, secondHand } = siteMetadata.images.clock;
  const [date, setDate] = useState(new Date(0));
  const [hourAngle, minuteAngle, secondAngle] = calcClockRotate(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );

  useEffect(() => {
    // this code is solving the problem of difference between server and client
    const timeout = setTimeout(() => {
      const newDate = new Date();
      setDate(newDate);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <NextImage
        css={[
          tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`,
          css`
            width: ${CLOCK_SIZE}px;
            height: ${CLOCK_SIZE}px;
          `,
        ]}
        src={plate}
        alt={'plate'}
        width={1000}
        height={1000}
      />
      <div
        css={[
          {
            rotate: `${hourAngle}deg`,
          },
        ]}
      >
        <NextImage
          suppressHydrationWarning={true}
          css={[
            getClockHandStyle('h', (CLOCK_SIZE * 2) / 3),
            tw`animate-spin-hour`,
          ]}
          src={hourHand}
          alt={'hour'}
          width={1000}
          height={1000}
        />
      </div>
      <div
        css={[
          {
            rotate: `${minuteAngle}deg`,
          },
        ]}
      >
        <NextImage
          suppressHydrationWarning={true}
          css={[getClockHandStyle('m'), tw`animate-spin-minute`]}
          src={minuteHand}
          alt={'minute'}
          width={1000}
          height={1000}
        />
      </div>
      <div
        css={[
          {
            rotate: `${secondAngle}deg`,
          },
        ]}
      >
        <NextImage
          suppressHydrationWarning={true}
          css={[getClockHandStyle('s'), tw`animate-spin-second`]}
          src={secondHand}
          alt={'second'}
          width={1000}
          height={1000}
        />
      </div>
    </Container>
  );
};

const getClockHandStyle = (type: THandType, handSize = CLOCK_SIZE - 30) => [
  tw`animate-spin`,
  css`
    position: absolute;
    object-fit: contain;
    height: ${handSize}px;
    top: 50%;
    transform-origin: 50% 0;
  `,
];

const Container = styled.div(() => [
  tw`relative aspect-square h-full`,
  css`
    width: ${CLOCK_SIZE}px;
    height: ${CLOCK_SIZE}px;
  `,
]);

export default Clock;
