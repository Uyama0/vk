import { PropsWithChildren } from 'react';

import { Layout as AntLayout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import styles from './styles.module.css';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntLayout className={styles.wrapper}>
      <Content>{children}</Content>
    </AntLayout>
  );
};
