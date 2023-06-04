'use client';

import tw from 'twin.macro';
import 'twin.macro';

import useClock from '@/hooks/useClock';

interface Props {
  onClick: () => void;
}

const padZero = (num: number) => num.toString().padStart(2, '0');

const ClockButton = ({ onClick }: Props) => {
  const { hour, minute, second } = useClock();
  return (
    <Button onClick={onClick} suppressHydrationWarning={true}>
      {[hour, minute, second].map(padZero).join(':')}
    </Button>
  );
};

const Button = tw.button`flex h-20 w-20 items-start justify-center bg-red-200`;

export default ClockButton;
