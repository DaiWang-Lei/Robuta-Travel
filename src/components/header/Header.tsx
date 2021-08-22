import React, { FC } from 'react';
import styles from "./Header.module.css";
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
export const Header: FC = (props) => {
  // history 导航操作
  const history = useHistory()
  // location 当前路径的信息
  const location = useLocation()
  // params url中的参数
  const params = useParams()
  //match 路径匹配的数据
  const match = useRouteMatch()

  const menuData = [
    { id: 1, label: '旅游首页' },
    { id: 2, label: '周末游' },
    { id: 3, label: '跟团游' },
    { id: 4, label: '自由行' },
    { id: 5, label: '私家团' },
    { id: 6, label: '邮轮' },
    { id: 7, label: '酒店+景点 ' },
    { id: 8, label: '当地玩乐' },
    { id: 9, label: '主题游' },
    { id: 10, label: '定制游' },
    { id: 11, label: '游学' },
    { id: 12, label: '签证' },
    { id: 13, label: '企业游' },
    { id: 14, label: '高端游' },
    { id: 15, label: '爱玩户外' },
    { id: 16, label: '保险' },
  ]

  return (
    <div className={styles['app-header']}>

      {/* 顶部功能区 */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>
            让旅行更幸福
          </Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            icon={<GlobalOutlined />}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>

              </Menu>
            }>
            语言
          </Dropdown.Button>

          <Button.Group className={styles['button-group']}>
            <Button onClick={() => { history.push('signIn') }}>登录</Button>
            <Button onClick={() => { history.push('register') }}>注册</Button>
          </Button.Group>
        </div>
      </div>

      {/* 顶部展示 */}
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => { history.push('/') }}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            Robuta旅游网
          </Typography.Title>
        </span>
        <Input.Search placeholder='请输入目的地' className={styles['search-input']} />
      </Layout.Header>

      {/* 顶部菜单 */}
      <Menu mode='horizontal' className={styles['main-menu']}>
        {
          menuData.map(item => (
            <Menu.Item key={item.id}>{item.label}</Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}

export default Header;