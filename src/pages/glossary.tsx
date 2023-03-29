import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import tw from 'twin.macro';

import { getGlossaryKey } from '@/hooks/rq/glossary';

import CharPicker from '@/components/glossary/CharPicker';
import GlossaryTable from '@/components/glossary/GlossaryTable';
import InputSearch from '@/components/glossary/InputSearch';
import GlossaryWrapper from '@/components/glossary/Wrapper';

import { getGlossary } from '@/request/glossary';
import { glossaryTableAtom } from '@/store/glossary';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();
  const { locale = 'en' } = context;

  await queryClient.prefetchQuery(getGlossaryKey(locale), () =>
    getGlossary(locale)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ['glossary'])),
    },
  };
}

const GlossaryPage = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('glossary');
  const [showTable, setShowTable] = useAtom(glossaryTableAtom);

  useEffect(() => {
    return () => {
      setShowTable(false);
    };
  }, []);

  return (
    <GlossaryWrapper>
      <div
        css={[
          tw`absolute top-1/2 flex -translate-y-1/2 flex-col items-center justify-center gap-y-6`,
          showTable && {
            transition: 'top 0.8s ease-in-out',
            top: 250,
          },
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
