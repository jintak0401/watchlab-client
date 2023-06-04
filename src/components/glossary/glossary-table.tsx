import { useAtom } from 'jotai';
import React, { useEffect, useRef } from 'react';
import tw, { css, styled } from 'twin.macro';

import Row from '@/components/glossary/Table/row';

import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';
import { instanceOfWord } from '@/types';

import Table from './Table/table';

const GlossaryTable = () => {
  const [tableShow] = useAtom(glossaryTableAtom);
  const [filteredWords] = useAtom(glossaryFilteredWordsAtom);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableRef.current) return;
    tableRef.current.scrollTop = 0;
  }, [filteredWords]);

  return (
    <TableWrapper
      ref={tableRef}
      css={[
        tableShow &&
          css`
            transition: top 0.8s ease-in-out;
            top: 470px;
          `,
      ]}
    >
      {filteredWords?.map((word, idx) => {
        const { word: _word, description } = instanceOfWord(word)
          ? word
          : word.item;

        return (
          <Row
            key={_word}
            css={[idx === 0 && tw`border-t-0`]}
            word={_word}
            description={description}
          />
        );
      })}
    </TableWrapper>
  );
};

const TableWrapper = styled(Table)(() => [
  tw`absolute top-full font-cormor`,
  css`
    width: 1000px;
    height: calc(95vh - 470px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
]);

export default GlossaryTable;
