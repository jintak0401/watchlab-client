import styled from '@emotion/styled';
import metadata from 'data/metadata';
import NextImage from 'next/image';
import { useEffect, useRef } from 'react';
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
  const handsRef = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const date = new Date();
    const [hour, minute, second] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    const [hourAngle, minuteAngle, secondAngle] = calcClockRotate(
      hour,
      minute,
      second
    );
    angleRef.current[0] = hourAngle;
    angleRef.current[1] = minuteAngle;
    angleRef.current[2] = secondAngle;
    handsRef.current[0]!.style.transform = `rotate(${angleRef.current[0]}deg) translateY(-50%)`;
    handsRef.current[1]!.style.transform = `rotate(${angleRef.current[1]}deg) translateY(-50%)`;
    handsRef.current[2]!.style.transform = `rotate(${angleRef.current[2]}deg) translateY(-50%)`;

    const interval = setInterval(() => {
      angleRef.current[0] += 1 / 120;
      angleRef.current[1] += 0.1;
      angleRef.current[2] += 6;
      handsRef.current[0]!.style.transform = `rotate(${angleRef.current[0]}deg) translateY(-50%)`;
      handsRef.current[1]!.style.transform = `rotate(${angleRef.current[1]}deg) translateY(-50%)`;
      handsRef.current[2]!.style.transform = `rotate(${angleRef.current[2]}deg) translateY(-50%)`;
    }, 1000);

    return () => {
      clearInterval(interval);
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
      <NextImage
        ref={(ref) => (handsRef.current[0] = ref)}
        css={getClockHandStyle(hourRotate, (CLOCK_SIZE * 2) / 3)}
        src={hourHand}
        alt={'hour'}
        width={1000}
        height={1000}
      />
      <NextImage
        ref={(ref) => (handsRef.current[1] = ref)}
        css={getClockHandStyle(minuteRotate)}
        src={minuteHand}
        alt={'minute'}
        width={1000}
        height={1000}
      />
      <NextImage
        ref={(ref) => (handsRef.current[2] = ref)}
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
