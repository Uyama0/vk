import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RepositoryList } from 'widgets/repositoryList';
import { Layout } from './layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RepositoryList />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
