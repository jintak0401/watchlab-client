import tw from 'twin.macro';

import { getTimezoneName, getUTCOffsetString } from '@/utils/time';

const Timezone = () => {
  const timezoneName = getTimezoneName();
  const utcOffset = getUTCOffsetString();
  const text = `${timezoneName} / ${utcOffset}`;
  return (
    <Container>
      {text.split('').map((char, idx) => (
        <div key={idx} tw={'flex-1 text-center font-franklin'}>
          {char}
        </div>
      ))}
    </Container>
  );
};

const Container = tw.div`mx-auto flex w-1/3 px-4 text-2xl`;

export default Timezone;
