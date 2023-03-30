import { useAtom } from 'jotai';
import React, { useEffect, useRef } from 'react';
import tw, { css } from 'twin.macro';

import Row from '@/components/glossary/Table/Row';

import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';
import { instanceOfWord } from '@/types';

import Table from './Table/Table';

const GlossaryTable = () => {
  const [tableShow] = useAtom(glossaryTableAtom);
  const [filteredWords] = useAtom(glossaryFilteredWordsAtom);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tableRef.current) return;
    tableRef.current.scrollTop = 0;
  }, [filteredWords]);

  return (
    <Table
      ref={tableRef}
      css={[
        tw`absolute top-full font-cormor`,
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
    </Table>
  );
};

export default GlossaryTable;
