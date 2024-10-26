import { List } from "antd";

import { RepositorySnippet } from "entities/repositorySnippet";

const repositories = [
  {
    id: 123,
    name: "example-repo-1",
    full_name: "username/example-repo-1",
    description: "This is the first example repository.",
    stargazers_count: 50,
    forks_count: 10,
    watchers_count: 20,
    language: "JavaScript",
    html_url: "https://github.com/username/example-repo-1",
    owner: {
      login: "username",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
    },
  },
  {
    id: 124,
    name: "example-repo-2",
    full_name: "username/example-repo-2",
    description: "This is the second example repository.",
    stargazers_count: 25,
    forks_count: 5,
    watchers_count: 15,
    language: "Python",
    html_url: "https://github.com/username/example-repo-2",
    owner: {
      login: "username",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
    },
  },
  {
    id: 125,
    name: "example-repo-3",
    full_name: "username/example-repo-3",
    description: "This is the third example repository.",
    watchers_count: 8,
    language: "TypeScript",
    html_url: "https://github.com/username/example-repo-3",
    owner: {
      login: "username",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
    },
  },
  {
    id: 126,
    name: "example-repo-4",
    full_name: "username/example-repo-4",
    description: "This is the fourth example repository.",
    stargazers_count: 30,
    forks_count: 7,
    html_url: "https://github.com/username/example-repo-4",
    owner: {
      login: "username",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
    },
  },
];

export const RepositoryList: React.FC = () => {
  return (
    <List
      dataSource={repositories}
      renderItem={(item) => <RepositorySnippet key={item.id} {...item} />}
    />
  );
};
