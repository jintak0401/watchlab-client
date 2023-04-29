import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import metadata from 'data/metadata';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

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
        <GlobalStyles />
        <ThemeProvider
          attribute="class"
          defaultTheme={metadata.theme}
          enableColorScheme={false}
        >
          <main
            className={`${cormorantGaramond.variable} ${crimsonText.variable} ${inknutAntiqua.variable} ${crimsonPro.variable} ${libre.variable} ${della.variable} font-sans-serif`}
          >
            <Component classNam {...pageProps} />
          </main>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
