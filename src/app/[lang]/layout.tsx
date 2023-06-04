import { ReactNode } from 'react';

import ClientLayout from '@/app/[lang]/layout.client';
import { languages } from '@/i18n/settings';
import { Union } from '@/types';

export interface RootProps {
  params: {
    lang: Union<typeof languages>;
  };
  children: ReactNode;
}

export const generateStaticParams = () => {
  return languages.map((locale) => ({ lang: locale }));
};

const RootLayout = ({ params, children }: RootProps) => {
  return <ClientLayout lang={params.lang}>{children}</ClientLayout>;
};

export default RootLayout;
