'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

import {
  cormorantGaramond,
  crimsonPro,
  crimsonText,
  della,
  inknutAntiqua,
  libre,
} from '@/styles/font';
import GlobalStyles from '@/styles/GlobalStyles';

import { Locale } from '~/i18n-config';

interface Props {
  lang: Locale;
  children: ReactNode;
}

const ClientLayout = ({ lang, children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
          },
        },
      })
  );
  return (
    <html lang={lang}>
      <GlobalStyles />
      <body
        className={`${cormorantGaramond.variable} ${crimsonText.variable} ${inknutAntiqua.variable} ${crimsonPro.variable} ${libre.variable} ${della.variable} font-sans-serif`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default ClientLayout;
