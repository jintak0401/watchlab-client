import styled from '@emotion/styled';
import metadata from 'data/metadata';
import NextImage from 'next/image';
import tw, { css } from 'twin.macro';

import useClock from '@/hooks/useClock';

import { CLOCK_SIZE } from '@/utils/constants';
import { calcClockRotate } from '@/utils/time';

const Clock = () => {
  const { plate, hourHand, minuteHand, secondHand } = metadata.images.clock;
  const { hour, minute, second } = useClock();
  const [hourRotate, minuteRotate, secondRotate] = calcClockRotate(
    hour,
    minute,
    second
  );

  console.log(`${hour}:${minute}:${second}`);
  console.log(`${hourRotate}, ${minuteRotate}, ${secondRotate}`);
  console.log('----------------------');

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
        css={getClockHandStyle(hourRotate, (CLOCK_SIZE * 2) / 3)}
        src={hourHand}
        alt={'hour'}
        width={1000}
        height={1000}
      />
      <NextImage
        css={getClockHandStyle(minuteRotate)}
        src={minuteHand}
        alt={'minute'}
        width={1000}
        height={1000}
      />
      <NextImage
        css={getClockHandStyle(secondRotate)}
        src={secondHand}
        alt={'second'}
        width={1000}
        height={1000}
      />
    </Container>
  );
};

const getClockHandStyle = (rotate: number, handSize = CLOCK_SIZE - 30) => [
  tw`absolute object-contain`,
  css`
    height: ${handSize}px;
    top: 50%;
    transition: transform 0.5s;
    transform-origin: 50% 0;
    transform: rotate(${rotate}deg) translateY(-50%);
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
