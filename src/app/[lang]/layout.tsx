import { ReactNode } from 'react';

import ClientLayout from '@/app/[lang]/layout.client';

import { i18n, Locale } from '~/i18n-config';

interface Props {
  params: {
    lang: Locale;
  };
  children: ReactNode;
}

export const generateStaticParams = () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({ params, children }: Props) => {
  return <ClientLayout lang={params.lang}>{children}</ClientLayout>;
};

export default RootLayout;
