import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'twin.macro';

import { getGlossaryKey } from '@/hooks/rq/glossary';

import CharPicker from '@/components/glossary/CharPicker';
import InputSearch from '@/components/glossary/InputSearch';
import GlossaryWrapper from '@/components/glossary/Wrapper';

import { getGlossary } from '@/request/glossary';

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

  return (
    <GlossaryWrapper>
      <h1 tw="font-cormor font-bold text-8xl text-white">{t('title')}</h1>
      <h2 tw="font-cormor text-3xl text-white">{t('description')}</h2>
      <InputSearch />
      <CharPicker />
    </GlossaryWrapper>
  );
};

export default GlossaryPage;
