import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

import { getGlossaryKey } from '@/hooks/rq/glossary';

import CharPicker from '@/components/glossary/CharPicker';
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
    },
  };
}

const GlossaryPage = () => {
  const { locale = 'en' } = useRouter();

  return (
    <GlossaryWrapper>
      <CharPicker />
    </GlossaryWrapper>
  );
};

export default GlossaryPage;
