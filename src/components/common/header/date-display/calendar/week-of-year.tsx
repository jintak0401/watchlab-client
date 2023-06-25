import { PropsWithTw, useReducer } from 'react';
import tw from 'twin.macro';

import useEveryMidnight from '@/hooks/use-every-midnight';

import { calcTotalWeek, calcWeek } from '@/utils/time';

const WeekOfYear = ({ className }: PropsWithTw) => {
  const [, forceRerender] = useReducer((x) => x + 1, 0);
  const todayWeek = calcWeek();
  const totalWeek = calcTotalWeek();
  useEveryMidnight(forceRerender);

  return (
    <Container className={className}>
      <WeekContainer>
        <div tw={'grow font-franklin text-3xl'}>WEEK</div>
        <div tw={'font-franklin text-5xl grow-[2]'}>
          {todayWeek} / {totalWeek}
        </div>
      </WeekContainer>
    </Container>
  );
};

const Container = tw.div`flex h-full`;
const WeekContainer = tw.div`flex flex-1 flex-col items-center justify-center`;

export default WeekOfYear;
