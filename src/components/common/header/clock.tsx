'use client';

import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
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
  const [date, setDate] = useState(new Date());
  const [hourAngle, minuteAngle, secondAngle] = calcClockRotate(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );

  useEffect(() => {
    setDate(new Date());
  }, []);

  const clockHands = [
    {
      angle: hourAngle,
      handStyle: getClockHandStyle({
        type: 'h',
        size: CLOCK_SIZE - 108,
        mt: 60,
        originOffset: 6,
      }),
      src: hourHand,
      alt: 'hour',
    },
    {
      angle: minuteAngle,
      handStyle: getClockHandStyle({
        type: 'm',
        size: CLOCK_SIZE - 45,
        mt: 30,
        originOffset: 8,
      }),
      src: minuteHand,
      alt: 'minute',
    },
    {
      angle: secondAngle,
      handStyle: getClockHandStyle({
        type: 's',
        size: CLOCK_SIZE - 2,
        mt: 9,
        originOffset: 8.5,
      }),
      src: secondHand,
      alt: 'second',
    },
  ];

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
      {clockHands.map(({ angle, handStyle, src, alt }) => (
        <HandContainer
          key={src}
          css={[
            {
              rotate: `${angle}deg`,
            },
          ]}
        >
          <NextImage
            suppressHydrationWarning={true}
            css={handStyle}
            src={src}
            alt={alt}
            width={1000}
            height={1000}
          />
        </HandContainer>
      ))}
    </Container>
  );
};

const rotate = keyframes`
  100% {
    transform: rotateZ(360deg);
  }
`;

const HandContainer = styled.div(() => [
  tw`absolute`,
  css`
    width: ${CLOCK_SIZE}px;
    height: ${CLOCK_SIZE}px;
  `,
]);

const getClockHandStyle = ({
  type,
  size,
  mt,
  originOffset,
}: {
  type: THandType;
  size: number;
  mt: number;
  originOffset: number;
}) => css`
  height: ${size / 2}px;
  object-fit: contain;
  margin-top: ${mt}px;
  transform-origin: 50% calc(100% - ${originOffset}px);
  animation: ${rotate} ${ANIMATION[type]};
`;

const Container = styled.div(() => [
  tw`relative aspect-square h-full`,
  css`
    width: ${CLOCK_SIZE}px;
    height: ${CLOCK_SIZE}px;
  `,
]);

export default Clock;
