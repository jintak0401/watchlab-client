import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw from 'twin.macro';
import 'twin.macro';

import Level1Layout from '@/components/layouts/Level1Layout';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  const { locale = 'en' } = context;

  const translations = await serverSideTranslations(locale, ['journal']);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...translations,
    },
  };
};

const Index = () => {
  const { t } = useTranslation('journal');

  return (
    <Level1Layout title={t('title')} subtitle={t('subtitle')} tw="bg-glossary">
      <div css={[tw`bg-red-300`, { height: 3000 }]} />
    </Level1Layout>
  );
};

export default Index;
