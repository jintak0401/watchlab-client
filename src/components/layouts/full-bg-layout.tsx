'use client';

import siteMetadata from 'data/site-metadata';
import { ReactNode } from 'react';
import tw from 'twin.macro';
import 'twin.macro';

import { Description, Subtitle, Title } from '@/components/common';

import { Union } from '@/types';

const BG_IMAGE = {
  manuals: siteMetadata.images.manualsBg,
  glossary: siteMetadata.images.glossaryBg,
} as const;

interface Props {
  title: string;
  subtitle: string;
  description: string;
  bgImage: Union<typeof BG_IMAGE>;
  children: ReactNode;
}

const FullBgLayout = ({
  title,
  subtitle,
  description,
  bgImage,
  children,
}: Props) => {
  return (
    <div
      css={[
        tw`h-screen w-screen`,
        { backgroundImage: `url(${BG_IMAGE[bgImage]})` },
      ]}
    >
      <div tw="relative flex h-full w-full flex-col items-center overflow-y-scroll bg-gradient-to-b from-black to-transparent">
        <div css={[{ paddingTop: 200, paddingBottom: 100 }]}>
          <Head>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {description && <Description>{description}</Description>}
          </Head>
          {children}
        </div>
      </div>
    </div>
  );
};

const Head = tw.div`flex flex-col items-center justify-center gap-y-8`;

export default FullBgLayout;
