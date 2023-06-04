import 'twin.macro';

import Hydration from '@/components/common/hydration';
import WithThumbnailLayout from '@/components/layouts/with-thumbnail-layout';
import ProfileChain from '@/components/profile/profile-chain';
import ProfileList from '@/components/profile/profile-list';
import ProfileSortButtons from '@/components/profile/profile-sort-buttons';

import { OnlyLangProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';
import { getProfile } from '@/request/profile';
import { PROFILE_KEY } from '@/utils/constants';

const ProfilesPage = async ({ params: { lang } }: OnlyLangProps) => {
  const { t } = await useTranslation(lang, 'profile');
  const queryKey = [PROFILE_KEY, lang];
  const queryFn = () => getProfile(lang);

  return (
    <WithThumbnailLayout
      title={t('title')}
      subtitle={t('subtitle')}
      thumbnail={'profiles'}
    >
      {/* @ts-expect-error Server Component */}
      <Hydration queryKey={queryKey} queryFn={queryFn}>
        <ProfileChain />
        <ProfileSortButtons />
        <ProfileList />
      </Hydration>
    </WithThumbnailLayout>
  );
};

export default ProfilesPage;
