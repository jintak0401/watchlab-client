import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import tw, { css } from 'twin.macro';

import { getGlossaryKey, useGlossaryQuery } from '@/hooks/rq/glossary';

import CharPicker from '@/components/glossary/CharPicker';
import GlossaryTable from '@/components/glossary/GlossaryTable';
import InputSearch from '@/components/glossary/InputSearch';
import GlossaryWrapper from '@/components/glossary/Wrapper';

import { getGlossary } from '@/request/glossary';
import { glossaryFilteredWordsAtom, glossaryTableAtom } from '@/store/glossary';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const { locale = 'en' } = context;

  await queryClient.prefetchQuery(getGlossaryKey(locale), () =>
    getGlossary(locale)
  );

  const [translations] = await Promise.all([
    serverSideTranslations(locale, ['glossary']),
    queryClient.prefetchQuery(getGlossaryKey(locale), () =>
      getGlossary(locale)
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...translations,
    },
  };
}

const GlossaryPage = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('glossary');
  const [showTable, setShowTable] = useAtom(glossaryTableAtom);
  const [, setFilteredWords] = useAtom(glossaryFilteredWordsAtom);
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
      <div
        css={[
          tw`absolute top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-y-6`,
          css`
            transition: top 0.8s ease-in-out;
          `,
          showTable &&
            css`
              top: 250px;
            `,
        ]}
      >
        <h1 tw="font-cormor font-bold text-8xl text-white">{t('title')}</h1>
        <h2 tw="font-cormor text-3xl text-white">{t('description')}</h2>
        <InputSearch />
        <CharPicker />
      </div>
      <GlossaryTable />
    </GlossaryWrapper>
  );
};

export default GlossaryPage;
