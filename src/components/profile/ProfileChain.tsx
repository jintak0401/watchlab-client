import { atom, useAtomValue } from 'jotai';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useMemo } from 'react';
import tw from 'twin.macro';
import 'twin.macro';

import { profileAtom } from '@/store/profile';
import { Profile } from '@/types';

interface Props {
  profileProps: Profile[];
}

const ProfileChain = ({ profileProps = [] }: Props) => {
  const { pathname } = useRouter();
  const currentProfileSlug = pathname.split('/')[2];
  const _profileAtom = useMemo(() => {
    return atom((get) =>
      get(profileAtom).sort((a, b) => a.name.localeCompare(b.name))
    );
  }, []);
  const profileAtomValue = useAtomValue(_profileAtom);
  const profiles = (
    profileAtomValue.length > 0 ? profileAtomValue : profileProps
  ).map(({ postSlug, name }) => (
    <NextLink
      css={postSlug === currentProfileSlug && tw`underline`}
      href={postSlug}
      key={name}
    >
      {name}
    </NextLink>
  ));

  return (
    <div
      css={[
        tw`mx-auto my-4 space-x-2 text-center text-base`,
        { maxWidth: 1500 },
      ]}
    >
      {profiles.map((profile, idx) => (
        <Fragment key={idx}>
          {idx > 0 && <span>-</span>}
          {profile}
        </Fragment>
      ))}
    </div>
  );
};

export default ProfileChain;
