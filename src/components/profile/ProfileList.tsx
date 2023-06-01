import { useAtomValue } from 'jotai';
import { useRouter } from 'next/router';
import tw from 'twin.macro';
import 'twin.macro';

import { useProfileQuery } from '@/hooks/rq/profile';

import { profileSortAtom } from '@/store/profile';
import { Profile, TPostSortBy } from '@/types';

import ProfileCard from './ProfileCard';

const SortCB = (sortBy: TPostSortBy) => {
  if (sortBy === 'a2z') {
    return (a: Profile, b: Profile) => a.name.localeCompare(b.name);
  } else if (sortBy === 'z2a') {
    return (a: Profile, b: Profile) => b.name.localeCompare(a.name);
  } else if (sortBy === 'establishedAt') {
    return (a: Profile, b: Profile) => a.establishedAt - b.establishedAt;
  }
  return () => 1;
};

const ProfileList = () => {
  const { locale = 'en' } = useRouter();
  const profileSortBy = useAtomValue(profileSortAtom);
  const { data: _profiles = [] } = useProfileQuery(locale);

  const profiles = _profiles.sort(SortCB(profileSortBy));

  return (
    <div
      css={[
        tw`mx-auto mt-8 grid grid-cols-4 items-center justify-center gap-7`,
        { width: 1700 },
      ]}
    >
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} {...profile} />
      ))}
    </div>
  );
};

export default ProfileList;
