import { memo } from 'react';
import tw, { styled } from 'twin.macro';

import Calendar from '@/components/common/header/date-display/calendar';
import CenturyAndLunar from '@/components/common/header/date-display/century-and-lunar';
import DigitalClock from '@/components/common/header/date-display/digital-clock';
import Timezone from '@/components/common/header/date-display/timezone';

import { HEADER_BODY_WIDTH } from '@/styles/header';

const DateDisplay = () => {
  return (
    <Container>
      <div tw={'flex items-center gap-4 pt-7 [&>*]:flex-1'}>
        <Calendar />
        <DigitalClock />
        <CenturyAndLunar />
      </div>
      <Hr />
      <Timezone />
    </Container>
  );
};

const Container = styled.div`
  width: ${HEADER_BODY_WIDTH}px;
`;

const Hr = tw.hr`my-1 w-full border-black border-t-2`;

export default memo(DateDisplay);
