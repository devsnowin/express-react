import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

import { trpc } from './utils/trpc';

import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8080/trpc',
        }),
      ],
    })
  );

  return (
    <HashRouter>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </trpc.Provider>
    </HashRouter>
  );
}
export default App;
