import { PropsWithTw, useReducer } from 'react';
import tw from 'twin.macro';

import useEveryMidnight from '@/hooks/use-every-midnight';

const MonthAndDay = ({ className }: PropsWithTw) => {
  const [, forceRerender] = useReducer((x) => x + 1, 0);
  const date = new Date();
  const month = Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const day = date.getDate();
  useEveryMidnight(forceRerender);

  return (
    <Container className={className}>
      <div tw={'font-franklin'}>{day}</div>
      <div tw={'font-franklin'}>{month}</div>
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col items-center justify-center`;

export default MonthAndDay;
