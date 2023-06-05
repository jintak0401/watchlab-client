'use client';

import siteMetadata from 'data/site-metadata';
import { PropsWithTwChildren } from 'react';
import tw from 'twin.macro';

import { Subtitle, Title } from '@/components/common';

import { Union } from '@/types';

const THUMBNAIL_MAP = {
  glossary: siteMetadata.images.glossaryBg,
  study: siteMetadata.images.studyBg,
  profiles: siteMetadata.images.profilesBg,
} as const;

interface Props extends PropsWithTwChildren {
  title: string;
  subtitle: string;
  thumbnail: Union<typeof THUMBNAIL_MAP>;
}

const WithThumbnailLayout = ({
  children,
  title,
  subtitle,
  thumbnail,
}: Props) => {
  return (
    <>
      <div
        css={[
          tw`mx-auto w-full bg-cover bg-center bg-no-repeat`,
          {
            width: 2000,
            height: 500,
            backgroundImage: `url(${THUMBNAIL_MAP[thumbnail]})`,
          },
        ]}
      >
        <div tw="flex h-full w-full flex-col items-center justify-end gap-6 bg-gradient-to-b from-transparent to-black pb-6">
          <Title>{title}</Title>
          <div
            css={[
              tw`flex w-fit flex-col items-center justify-center gap-6`,
              { width: 1700 },
            ]}
          >
            <Hr />
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

const Hr = tw.hr`w-full border-gray-300 border-t-2`;

const Header = tw.header`flex h-full w-full flex-col items-center justify-end bg-gradient-to-b from-transparent to-black text-white`;

export default WithThumbnailLayout;
