import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw, { css } from 'twin.macro';

import Level1Layout from '@/components/layouts/Level1Layout';
import ProfileChain from '@/components/profile/ProfileChain';
import ProfileList from '@/components/profile/ProfileList';
import ProfileSortButtons from '@/components/profile/ProfileSortButtons';

import { getProfile } from '@/request/profile';
import { PROFILE_KEY } from '@/utils/constants';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context;
  const queryClient = new QueryClient();

  const [translations] = await Promise.all([
    serverSideTranslations(locale, [PROFILE_KEY]),
    queryClient.prefetchQuery([PROFILE_KEY, locale], () => getProfile(locale)),
  ]);

  return {
    props: {
      ...translations,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

const ProfilePage = () => {
  const { t } = useTranslation(PROFILE_KEY);

  return (
    <Level1Layout title={t('title')} subtitle={t('subtitle')} css={layoutStyle}>
      <ProfileChain />
      <ProfileSortButtons />
      <ProfileList />
    </Level1Layout>
  );
};

const layoutStyle = [
  css`
    width: 2000px;
    height: 500px;
  `,
  tw`bg-profiles object-contain object-center`,
];

export default ProfilePage;
