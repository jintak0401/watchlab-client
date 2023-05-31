import { PropsWithTwChildren } from 'react';
import tw from 'twin.macro';

import { Subtitle, Title } from '@/components/common';
import DefaultLayout from '@/components/layouts/DefaultLayout';

interface Props extends PropsWithTwChildren {
  title: string;
  subtitle: string;
}

const Level1Layout = ({ children, className, title, subtitle }: Props) => {
  return (
    <DefaultLayout>
      <div
        css={[
          tw`mx-auto w-full bg-cover bg-center bg-no-repeat`,
          { height: 350 },
        ]}
        className={className}
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
    </DefaultLayout>
  );
};

const Hr = tw.hr`w-full border-gray-300 border-t-2`;

const Header = tw.header`flex h-full w-full flex-col items-center justify-end bg-gradient-to-b from-transparent to-black text-white`;

export default Level1Layout;
