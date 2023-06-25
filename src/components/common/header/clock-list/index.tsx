import tw, { css, styled } from 'twin.macro';

import WorldClock from '@/components/common/header/clock-list/world-clock';

import { CLOCK_SIZE } from '@/styles/header';

import Clock from './clock';

const ClockList = () => {
  return (
    <Container>
      <WorldClock />
      <Clock />
      <div>3</div>
    </Container>
  );
};

const Container = styled.div(() => [
  tw`flex items-center justify-center`,
  css`
    column-gap: ${CLOCK_SIZE / 10}px;
  `,
]);

export default ClockList;
