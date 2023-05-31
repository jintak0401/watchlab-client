import NextImage from 'next/image';
import NextLink from 'next/link';
import 'twin.macro';

import { Profile } from '@/types';

type Props = Pick<
  Profile,
  'postSlug' | 'name' | 'thumbnail' | 'emblem' | 'establishedAt' | 'locate'
>;

const ProfileCard = ({
  postSlug,
  name,
  thumbnail,
  locate,
  establishedAt,
  emblem,
}: Props) => {
  return (
    <NextLink href={postSlug} tw={'inline-block w-fit bg-white p-3'}>
      <NextImage
        tw={'w-80 aspect-[383/249]'}
        src={thumbnail}
        alt={'profiles thumbnail'}
        width={383}
        height={249}
      />
      <h3 tw={'py-2 text-center text-2xl'}>{name}</h3>
      <hr tw={'border-black'} />
      <div tw="flex items-center justify-between gap-1">
        <div tw="flex-[3]">
          <div tw="break-keep flex w-60 items-center py-2 text-xl">
            {locate}
          </div>
          <hr tw="mr-5 border-black" />
          <div>{establishedAt}</div>
        </div>
        <NextImage
          tw={'flex-1 object-contain'}
          src={emblem}
          alt={'emblem'}
          width={300}
          height={300}
        />
      </div>
    </NextLink>
  );
};

export default ProfileCard;
