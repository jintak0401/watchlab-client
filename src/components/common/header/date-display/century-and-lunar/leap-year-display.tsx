import { PropsWithTw } from 'react';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import tw from 'twin.macro';

import { calcLeapYear } from '@/utils/time';

const LeapYearDisplay = ({ className }: PropsWithTw) => {
  const rotateDegree = 90 * calcLeapYear();
  return (
    <Container className={className}>
      <Text>1</Text>
      <div tw={'flex flex-1 w-full items-center justify-center'}>
        <Text>4</Text>
        <HiOutlineArrowLongLeft
          size={20}
          style={{
            rotate: `${rotateDegree}deg`,
          }}
        />
        <Text>2</Text>
      </div>
      <Text>3</Text>
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col items-center justify-center text-xl`;

const Text = tw.div`flex-1 text-center font-franklin`;

export default LeapYearDisplay;
