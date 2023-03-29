import { useAtom } from 'jotai';
import React, { ReactNode, useEffect, useRef } from 'react';
import tw, { css } from 'twin.macro';

import Row from '@/components/glossary/Table/Row';

import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';
import { instanceOfWord, Word } from '@/types';

import Table from './Table/Table';

const HighlightedText = ({
  text,
  indices,
}: {
  text: string;
  indices: ReadonlyArray<[number, number]>;
}) => {
  const result = [];
  let last = 0;
  for (const [start, end] of indices) {
    result.push(text.slice(last, start));
    result.push(
      <span tw="bg-yellow-300" key={start}>
        {text.slice(start, end + 1)}
      </span>
    );
    last = end + 1;
  }
  result.push(text.slice(last));
  return <>{result}</>;
};

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
      {filteredWords?.map((word, idx) => {
        if (instanceOfWord(word)) {
          return (
            <Row
              key={word.word}
              css={[idx === filteredWords.length - 1 && tw`border-b-0`]}
              word={word.word}
              description={word.description}
            />
          );
        }
        // fuzzy
        else {
          const { item, matches } = word;

          const wordObj: { word: ReactNode; description: ReactNode } = {
            ...item,
          };
          matches?.forEach((match) => {
            const key = match.key as keyof Word;
            wordObj[key] = HighlightedText({
              text: item[key],
              indices: match.indices,
            });
          });

          return (
            <Row
              key={item.word}
              css={[idx === filteredWords.length - 1 && tw`border-b-0`]}
              word={wordObj.word ?? item.word}
              description={wordObj.description ?? item.description}
            />
          );
        }
      })}
    </Table>
  );
};

export default GlossaryTable;
