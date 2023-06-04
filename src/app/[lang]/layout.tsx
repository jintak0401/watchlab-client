import { ReactNode } from 'react';

import ClientLayout from '@/app/[lang]/layout.client';
import { languages, TLang } from '@/i18n/settings';

export interface RootProps {
  params: {
    lang: TLang;
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
