import React, { FC } from 'react';
import { Menu } from 'antd';
import { sideMenuList } from './mockup';
import styles from './SideMenu.module.css'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {
        sideMenuList.map((m, index) => (
          <Menu.SubMenu key={`side-menu-${index}`}
            title={
              <span>
                <GifOutlined style={{marginRight:5}} />
                {m.title}
              </span>
            }>
            {
              m.subMenu.map((sm, smindex) => (
                <Menu.SubMenu key={`sub-menu-${smindex}`}
                  title={
                    <span>
                      <GifOutlined style={{marginRight:5}} />
                      {sm.title}
                    </span>
                  }>
                  {
                    sm.subMenu.map((sms, smsindex) => (
                      <Menu.Item key={`menu-item-${smsindex}`} >
                        <GifOutlined  style={{marginRight:5}}/>
                        {sms}
                      </Menu.Item>
                    ))
                  }
                </Menu.SubMenu>
              ))
            }
          </Menu.SubMenu>
        ))
      }
    </Menu>
  )
}

export default SideMenu;