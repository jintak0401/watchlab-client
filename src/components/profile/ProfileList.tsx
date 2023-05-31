import { useAtomValue } from 'jotai';
import tw from 'twin.macro';
import 'twin.macro';

import { profileAtom } from '@/store/profile';
import { Profile } from '@/types';

import ProfileCard from './ProfileCard';

interface Props {
  profilesProps: Profile[];
}

const ProfileList = ({ profilesProps = [] }: Props) => {
  const profileAtomValue = useAtomValue(profileAtom);
  const profiles =
    profileAtomValue.length > 0 ? profileAtomValue : profilesProps;

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
