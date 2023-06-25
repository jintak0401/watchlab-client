import tw from 'twin.macro';

import useClock from '@/hooks/use-clock';

import { padZero } from '@/utils/str-utils';

const DigitalClock = () => {
  const { hour, minute, second } = useClock();
  const time = [hour, minute, second].map((num) => padZero(num)).join(':');
  return (
    <Time suppressHydrationWarning={true} dateTime={time}>
      {time.split('').map((char, idx) => (
        <TimeText key={idx} suppressHydrationWarning={true}>
          {char}
        </TimeText>
      ))}
    </Time>
  );
};

const Time = tw.time`my-auto flex`;

const TimeText = tw.div`inline-block flex-1 text-center font-franklin text-5xl`;

export default DigitalClock;
