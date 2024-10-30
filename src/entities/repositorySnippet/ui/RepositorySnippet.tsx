import { Avatar, List } from "antd";
import { ForkOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";

import { IconText } from "shared/ui/iconText";

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

export const RepositorySnippet: React.FC<IRepositorySnippet> = ({
  full_name,
  description,
  owner,
  forks_count,
  stargazers_count,
  watchers_count,
  html_url,
}) => {
  return (
    <Link href={html_url} target="_blank">
      <List.Item
        actions={[
          <IconText
            icon={<StarOutlined />}
            text={`${stargazers_count ?? 0}`}
            key="list-vertical-star-o"
          />,
          <IconText
            icon={<ForkOutlined />}
            text={`${forks_count ?? 0}`}
            key="list-vertical-like-o"
          />,
          <IconText
            icon={<MessageOutlined />}
            text={`${watchers_count ?? 0}`}
            key="list-vertical-message"
          />,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={owner.avatar_url} size={64} />}
          title={full_name}
          description={description}
        />
      </List.Item>
    </Link>
  );
};
