import tw, { css, styled } from 'twin.macro';

import WorldClock from '@/components/common/header/clock-list/world-clock';

import { CLOCK_SIZE } from '@/styles/header';

import Clock from './clock';

const ClockList = () => {
  const list = [
    { name: 'WORLD TIME', Component: WorldClock },
    { name: 'TIME', Component: Clock },
    { name: 'ZODIAC TIME', Component: WorldClock },
  ];

  return (
    <Container>
      {list.map(({ name, Component }) => (
        <div
          key={name}
          tw={'flex flex-col items-center justify-center gap-y-2'}
        >
          <h4 tw={'font-franklin text-xl'}>{name}</h4>
          <Component />
        </div>
      ))}
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
