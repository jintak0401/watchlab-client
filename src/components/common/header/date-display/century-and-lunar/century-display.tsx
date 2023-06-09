import { PropsWithTw } from 'react';
import tw from 'twin.macro';

const nth = [
  null,
  null,
  'THIRD',
  'FOURTH',
  'FIFTH',
  'SIXTH',
  'SEVENTH',
  'EIGHTH',
  'NINTH',
];

const CenturyDisplay = ({ className }: PropsWithTw) => {
  const yearIdx = Math.floor(new Date().getFullYear() / 1000);
  return (
    <Container className={className}>
      <div tw={'font-franklin text-xl'}>{nth[yearIdx]}</div>
      <div tw={'font-franklin text-xs'}>MILLENNIUM</div>
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col flex-wrap items-center justify-center`;

export default CenturyDisplay;
