import { PropsWithTw, useReducer } from 'react';
import tw from 'twin.macro';

import useEveryMidnight from '@/hooks/use-every-midnight';

import { DAY_OF_WEEK } from '@/utils/constants';

const DayOfWeek = ({ className }: PropsWithTw) => {
  const [, forceRerender] = useReducer((x) => x + 1, 0);
  const dayOfWeek = new Date().getDay();
  useEveryMidnight(forceRerender);
  return (
    <Container className={className}>
      <div tw={'font-franklin'}>{DAY_OF_WEEK[dayOfWeek]}</div>
      <div tw={'flex w-full items-center'}>
        {DAY_OF_WEEK.map((day, idx) => (
          <span
            css={[
              tw`inline-block grow text-center font-franklin`,
              idx === dayOfWeek && tw`underline`,
            ]}
            key={day}
          >
            {day[0]}
          </span>
        ))}
      </div>
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col items-center justify-center`;

export default DayOfWeek;
