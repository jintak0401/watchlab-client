import { memo } from 'react';
import tw from 'twin.macro';

import Calendar from '@/components/common/header/date-display/calendar';
import CenturyAndLunar from '@/components/common/header/date-display/century-and-lunar';
import DigitalClock from '@/components/common/header/date-display/digital-clock';
import Timezone from '@/components/common/header/date-display/timezone';

const DateDisplay = () => {
  return (
    <Container>
      <div tw={'flex gap-4 pt-7 [&>*]:flex-1'}>
        <Calendar />
        <DigitalClock />
        <CenturyAndLunar />
      </div>
      <Hr />
      <Timezone />
    </Container>
  );
};

const Container = tw.div`w-[2000px]`;

const Hr = tw.hr`w-full border-black border-t-2`;

export default memo(DateDisplay);
