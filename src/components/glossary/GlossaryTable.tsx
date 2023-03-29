import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import tw, { css } from 'twin.macro';

import Row from '@/components/glossary/Table/Row';

import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';

import Table from './Table/Table';

const GlossaryTable = () => {
  const [tableShow] = useAtom(glossaryTableAtom);
  const [filteredWords] = useAtom(glossaryFilteredWordsAtom);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0;
    }
  }, [filteredWords]);

  return (
    <Table
      ref={tableRef}
      css={[
        tw`absolute top-full`,
        css`
          width: 1000px;
          height: calc(95vh - 470px);
          overflow-y: auto;
          &::-webkit-scrollbar {
            display: none;
          }
        `,
        tableShow &&
          css`
            transition: top 0.8s ease-in-out;
            top: 470px;
          `,
      ]}
    >
      {filteredWords?.map(({ word, description }, idx) => (
        <Row
          key={word}
          css={[idx === filteredWords.length - 1 && tw`border-b-0`]}
          word={word}
          description={description}
        />
      ))}
    </Table>
  );
};

export default GlossaryTable;
