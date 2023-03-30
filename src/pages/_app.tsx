import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { cormorantGaramond } from '@/styles/font';
import GlobalStyles from '@/styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <main className={`${cormorantGaramond.variable} font-sans`}>
          <Component classNam {...pageProps} />
        </main>
      </QueryClientProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
