import {
  dehydrate,
  QueryClient,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';
import { cache, ReactNode } from 'react';

import HydrationOnClient from '@/components/common/hydration.client';

interface Props {
  queryKey: QueryKey | QueryKey[];
  queryFn: QueryFunction | QueryFunction[];
  children?: ReactNode;
}

const getQueryClient = cache(() => new QueryClient());

const Hydration = async ({ queryKey, queryFn, children }: Props) => {
  const client = getQueryClient();
  if (queryFn instanceof Array) {
    await Promise.all(
      queryFn.map(async (fn, idx) => {
        await client.prefetchQuery(queryKey[idx] as QueryKey, fn);
      })
    );
  } else {
    await client.prefetchQuery(queryKey, queryFn);
  }
  const dehydratedState = dehydrate(client);

  return (
    <HydrationOnClient state={dehydratedState}>{children}</HydrationOnClient>
  );
};

export default Hydration;
