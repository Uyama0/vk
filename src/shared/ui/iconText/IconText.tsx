import { Space } from "antd";
import { ReactElement } from "react";

interface IIconText {
  icon: ReactElement;
  text: string;
}

export const IconText: React.FC<IIconText> = ({ icon, text }) => {
  return (
    <Space>
      {icon}
      {text}
    </Space>
  );
};
