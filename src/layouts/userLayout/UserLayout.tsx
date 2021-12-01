import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserLayout.module.css";
import logo from '@/assets/logo.svg';

const { Header, Footer, Content } = Layout;

export const UserLayout: React.FC = ({ children }) => {
  const menu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );

  return (
    <Layout className={styles.userLayoutContainer}>
      <Header className={styles.header}>
        <div className={styles.lang}>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      
      <Content className={styles.content}>
        <div className={styles.top}>
          <div className={styles.contentHeader}>
            <Link to="/">
              <img alt={logo} src={logo} className={styles.logo} />
              <span className={styles.title}>React 旅游网</span>
            </Link>
          </div>
          {children}
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>@XXX 版权所有</Footer>

    </Layout>
  );
};
