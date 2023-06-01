import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import tw from 'twin.macro';
import 'twin.macro';

import { useProfileQuery } from '@/hooks/rq/profile';

const ProfileChain = () => {
  const { asPath, locale = 'en' } = useRouter();
  const { data: profiles = [] } = useProfileQuery(locale);

  const profilesLinkArr = [...profiles]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ postSlug, name }) => (
      <NextLink
        css={postSlug === asPath.slice(1) && tw`underline`}
        href={`/${postSlug}`}
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
      {profilesLinkArr.map((profile, idx) => (
        <Fragment key={idx}>
          {idx > 0 && <span>-</span>}
          {profile}
        </Fragment>
      ))}
    </div>
  );
};

export default ProfileChain;
