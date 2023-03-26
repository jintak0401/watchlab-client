import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';

import GlobalStyles from '@/styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
