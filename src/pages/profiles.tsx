import { useSetAtom } from 'jotai';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import tw, { css } from 'twin.macro';

import Level1Layout from '@/components/layouts/Level1Layout';
import ProfileChain from '@/components/profile/ProfileChain';
import ProfileList from '@/components/profile/ProfileList';
import ProfileSortButtons from '@/components/profile/ProfileSortButtons';

import { getProfile } from '@/request/profile';
import { profileAtom } from '@/store/profile';
import { PROFILE_KEY } from '@/utils/constants';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context;

  const [translations, profiles] = await Promise.all([
    serverSideTranslations(locale, [PROFILE_KEY]),
    getProfile(locale),
  ]);

  return {
    props: {
      ...translations,
      profiles: profiles ?? [],
    },
    revalidate: 10,
  };
};

const ProfilePage = ({
  profiles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(PROFILE_KEY);
  const setProfile = useSetAtom(profileAtom);

  useEffect(() => {
    setProfile(profiles);
  }, []);

  return (
    <Level1Layout title={t('title')} subtitle={t('subtitle')} css={layoutStyle}>
      <ProfileChain profileProps={profiles} />
      <ProfileSortButtons />
      <ProfileList profilesProps={profiles} />
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
