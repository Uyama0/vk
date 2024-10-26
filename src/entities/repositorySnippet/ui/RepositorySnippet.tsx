interface IRepositorySnippet {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count?: number;
  forks_count?: number;
  watchers_count?: number;
  language?: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const RepositorySnippet: React.FC<IRepositorySnippet> = () => {
  return <div>RepositorySnippet</div>;
};
