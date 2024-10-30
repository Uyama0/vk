import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';

import { List } from 'antd';

import { RepositorySnippet } from 'entities/repositorySnippet';
import { LoadErrorWrapper } from 'shared/ui/loadErrorWrapper';
import { repositoryStore } from 'app/store/repositoryStore';

const getRepository = async () => {
  const response = await fetch(
    'https://api.github.com/search/repositories?q=javascript&per_page=10'
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const RepositoryList: React.FC = observer(() => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['getRepositoryData'],
    queryFn: getRepository,
  });

  useEffect(() => {
    if (data) {
      repositoryStore.setRepositoryData(data.items);
    }
  }, [data]);

  return (
    <LoadErrorWrapper isLoading={isLoading} isError={new Error}>
      <List
        dataSource={repositoryStore.repositories}
        size="large"
        itemLayout="vertical"
        renderItem={(item) => <RepositorySnippet key={item.id} {...item} />}
      />
    </LoadErrorWrapper>
  );
});
