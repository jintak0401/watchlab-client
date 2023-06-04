import 'twin.macro';

import Hydration from '@/components/common/hydration';
import ProfileChain from '@/components/profile/profile-chain';
import ProfileList from '@/components/profile/profile-list';
import ProfileSortButtons from '@/components/profile/profile-sort-buttons';

import { getProfile } from '@/request/profile';
import { PROFILE_KEY } from '@/utils/constants';

import { Locale } from '~/i18n-config';

interface Props {
  params: { lang: Locale };
}

const ProfilesPage = ({ params: { lang } }: Props) => {
  const queryKey = [PROFILE_KEY, lang];
  const queryFn = () => getProfile(lang);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Hydration queryKey={queryKey} queryFn={queryFn}>
        <ProfileChain />
        <ProfileSortButtons />
        <ProfileList />
      </Hydration>
    </>
  );
};

export default ProfilesPage;
