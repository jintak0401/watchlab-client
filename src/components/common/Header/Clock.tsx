import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import metadata from 'data/metadata';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';

import { CLOCK_SIZE } from '@/utils/constants';
import { calcClockRotate } from '@/utils/time';

type THandType = 'h' | 'm' | 's';

const ANIMATION: { [key in THandType]: string } = {
  h: '43200s infinite linear',
  m: '3600s infinite linear',
  s: '60s infinite linear',
};

const Clock = () => {
  const { plate, hourHand, minuteHand, secondHand } = metadata.images.clock;
  const [date, setDate] = useState(new Date());
  const [hourAngle, minuteAngle, secondAngle] = calcClockRotate(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );

  useEffect(() => {
    const newDate = new Date();
    setDate(newDate);
    console.log(newDate);
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
      <NextImage
        css={getClockHandStyle('h', hourAngle, (CLOCK_SIZE * 2) / 3)}
        src={hourHand}
        alt={'hour'}
        width={1000}
        height={1000}
      />
      <NextImage
        css={getClockHandStyle('m', minuteAngle)}
        src={minuteHand}
        alt={'minute'}
        width={1000}
        height={1000}
      />
      <NextImage
        css={getClockHandStyle('s', secondAngle)}
        src={secondHand}
        alt={'second'}
        width={1000}
        height={1000}
      />
    </Container>
  );
};

const rotate = (startAngle: number) => keyframes`
  0% {
    transform: rotateZ(${startAngle}deg) translateY(-50%);
  }
  100% {
    transform: rotateZ(${startAngle + 360}deg) translateY(-50%);
  }
`;

const getClockHandStyle = (
  type: THandType,
  angle: number,
  handSize = CLOCK_SIZE - 30
) => [
  tw`absolute object-contain`,
  css`
    height: ${handSize}px;
    top: 50%;
    transition: transform 0.5s;
    transform-origin: 50% 0;
    animation: ${rotate(angle)} ${ANIMATION[type]};
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
