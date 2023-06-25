import tw from 'twin.macro';

import { convertArabicToRoman } from '@/utils/str-utils';

const YearDisplay = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <time dateTime={String(year)} tw={'font-franklin'}>
        {year}
      </time>
      <div tw={'font-franklin'}>C.E.</div>
      <time dateTime={String(year)} tw={'font-franklin'}>
        {convertArabicToRoman(year)}
      </time>
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col items-center justify-center text-2xl`;

export default YearDisplay;
