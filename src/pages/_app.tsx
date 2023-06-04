import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import siteMetadata from 'data/site-metadata';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import '@/styles/unreset.css';

import {
  cormorantGaramond,
  crimsonPro,
  crimsonText,
  della,
  inknutAntiqua,
  libre,
} from '@/styles/font';
import GlobalStyles from '@/styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyles />
          <ThemeProvider
            attribute="class"
            defaultTheme={siteMetadata.theme}
            enableColorScheme={false}
          >
            <main
              className={`${cormorantGaramond.variable} ${crimsonText.variable} ${inknutAntiqua.variable} ${crimsonPro.variable} ${libre.variable} ${della.variable} font-sans-serif`}
            >
              <Component classNam {...pageProps} />
            </main>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
