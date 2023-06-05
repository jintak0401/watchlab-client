'use client';

import { useAtom, useSetAtom } from 'jotai';
import { ReactNode, useEffect } from 'react';
import tw, { css, styled } from 'twin.macro';

import { useGlossaryQuery } from '@/hooks/rq/glossary';
import useLocale from '@/hooks/use-locale';

import GlossaryTable from '@/components/glossary/glossary-table';
import GlossaryWrapper from '@/components/glossary/wrapper';

import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';

interface Props {
  children: ReactNode;
}

const GlossaryLayout = ({ children }: Props) => {
  const locale = useLocale();
  const [showTable, setShowTable] = useAtom(glossaryTableAtom);
  const setFilteredWords = useSetAtom(glossaryFilteredWordsAtom);
  const { data: wordList } = useGlossaryQuery(locale);

  useEffect(() => {
    return () => {
      setShowTable(false);
    };
  }, []);

  useEffect(() => {
    if (wordList) {
      setFilteredWords(wordList);
    }
  }, [wordList]);

  return (
    <GlossaryWrapper>
      <GlossaryHeader
        css={[
          showTable && {
            top: 250,
          },
        ]}
      >
        {children}
      </GlossaryHeader>
      <GlossaryTable />
    </GlossaryWrapper>
  );
};

const GlossaryHeader = styled.div(() => [
  tw`absolute top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-y-8`,
  css`
    transition: top 0.8s ease-in-out;
  `,
]);
export default GlossaryLayout;
