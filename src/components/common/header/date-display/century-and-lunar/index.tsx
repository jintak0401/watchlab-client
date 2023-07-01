import tw from 'twin.macro';

import CenturyDisplay from '@/components/common/header/date-display/century-and-lunar/century-display';
import LeapYearDisplay from '@/components/common/header/date-display/century-and-lunar/leap-year-display';
import LunarDisplay from '@/components/common/header/date-display/century-and-lunar/lunar-display';
import YearDisplay from '@/components/common/header/date-display/century-and-lunar/year-display';

const CenturyAndLunar = () => {
  return (
    <Container>
      <YearDisplay />
      <CenturyDisplay />
      <LeapYearDisplay />
      <LunarDisplay />
    </Container>
  );
};

const Container = tw.div`flex h-full items-center text-base [&>*]:flex-1`;

export default CenturyAndLunar;
