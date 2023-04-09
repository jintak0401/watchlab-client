import styled from '@emotion/styled';
import { PropsWithTw, ReactNode } from 'react';
import tw, { css } from 'twin.macro';

interface Props extends PropsWithTw {
  word: ReactNode;
  description: ReactNode;
}
const Row = ({ word, description, className }: Props) => {
  return (
    <TR className={className}>
      <TH scope="row">{word}</TH>
      <TD>{description}</TD>
    </TR>
  );
};

const TR = tw.tr`border-gray-900 border-t bg-glossary-table text-gray-900`;

const TH = styled.th(() => [
  tw`border-gray-800 border-r p-4 font-bold text-3xl`,
  css`
    width: 250px;
  `,
]);

const TD = tw.td`px-4 py-4 font-normal text-2xl`;

export default Row;
