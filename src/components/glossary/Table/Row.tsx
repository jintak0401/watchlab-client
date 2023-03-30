import { PropsWithTw, ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import 'twin.macro';

interface Props extends PropsWithTw {
  word: ReactNode;
  description: ReactNode;
}
const Row = ({ word, description, ...rest }: Props) => {
  return (
    <tr tw="border-gray-900 border-t bg-glossary-table text-gray-900" {...rest}>
      <th
        scope="row"
        css={[
          tw`border-gray-800 border-r px-4 font-bold text-3xl`,
          css`
            width: 250px;
          `,
        ]}
      >
        {word}
      </th>
      <td tw="px-4 py-4 font-semibold text-xl">{description}</td>
    </tr>
  );
};

export default Row;
