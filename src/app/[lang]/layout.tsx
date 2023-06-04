'use client';

import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import siteMetadata from 'data/site-metadata';
import { Provider } from 'jotai';
import { ThemeProvider } from 'next-themes';
import { cache, ReactNode } from 'react';

import {
  cormorantGaramond,
  crimsonPro,
  crimsonText,
  della,
  inknutAntiqua,
  libre,
} from '@/styles/font';
import GlobalStyles from '@/styles/GlobalStyles';
import { Union } from '@/types';

import { i18n } from '~/i18n-config';

interface Props {
  params: {
    lang: Union<typeof i18n.locales>;
  };
  children: ReactNode;
}

export const generateStaticParams = () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
};

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
        },
      },
    })
);
const RootLayout = ({ params, children }: Props) => {
  const queryClient = getQueryClient();

  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydrate(queryClient)}>
          <GlobalStyles />
          <ThemeProvider
            attribute="class"
            defaultTheme={siteMetadata.theme}
            enableColorScheme={false}
          >
            <html lang={params.lang}>
              <body
                className={`${cormorantGaramond.variable} ${crimsonText.variable} ${inknutAntiqua.variable} ${crimsonPro.variable} ${libre.variable} ${della.variable} font-sans-serif`}
              >
                {children}
              </body>
            </html>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default RootLayout;
