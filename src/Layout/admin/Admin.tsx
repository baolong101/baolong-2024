// src/Layout/admin/AdminLayout.tsx
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Link here
import { Button, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: 'products', icon: <AppstoreOutlined />, label: 'Products', link: '/admin' },
  { key: 'categories', icon: <ContainerOutlined />, label: 'Categories', link: '/admin/categories' },
  { key: 'Logout', icon: <ContainerOutlined />, label: 'Logout', link: '/' },
];

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          width: collapsed ? 80 : 256,
          height: '100%',
          background: '#001529',
          position: 'fixed',
          left: 0,
          top: 0,
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['products']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {items.map(item => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              style={{ textAlign: 'center' }} // Optional: Center the text
            >
              <Link to={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div style={{ flex: 1, marginLeft: collapsed ? 80 : 256, padding: '16px' }}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
