'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 60 * 1000,
            retry: 0,
          },
          mutations: {
            retry: 0,
          },
        },
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
