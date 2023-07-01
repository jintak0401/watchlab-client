import { PropsWithTw, useReducer } from 'react';
import tw, { css } from 'twin.macro';

import useEveryMidnight from '@/hooks/use-every-midnight';

import { calcTotalWeek, calcWeek } from '@/utils/time';

const WeekOfYear = ({ className }: PropsWithTw) => {
  const [, forceRerender] = useReducer((x) => x + 1, 0);
  const todayWeek = calcWeek();
  const totalWeek = calcTotalWeek();
  useEveryMidnight(forceRerender);

  return (
    <Container className={className}>
      <div tw={'font-franklin text-base'}>WEEK</div>
      <div
        css={[
          tw`font-franklin grow-[2]`,
          css`
            font-size: 1.4rem;
          `,
        ]}
      >
        {todayWeek} / {totalWeek}
      </div>
    </Container>
  );
};

const Container = tw.div`flex flex-1 h-full flex-col items-center justify-between`;

export default WeekOfYear;
