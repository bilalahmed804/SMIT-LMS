import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
    children: [
      {
        key: '29',
        label: 'Courses Enrolled',
      },
      {
        key: '0',
        label: 'Pending Assignments',
      },
      {
        key: '19',
        label: 'Recent Grades',
      },
    ],
  },
  {
    key: 'sub9',
    label: 'Assignments',
    icon: <DesktopOutlined />,
    children: [
      {
        key: '99',
        label: 'View Assignments',
      },
      {
        key: '91',
        label: 'Pending Assignments',
      },
      {
        key: '11',
        label: 'Submit Assignment',
      },
      {
        key: '12',
        label: 'Past Assignments',
      },
    ],
  },
  {
    key: 'sub8',
    label: 'Courses',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '21',
        label: 'My Courses',
      },
      {
        key: '98',
        label: 'Course Material',
      },
      {
        key: '89',
        label: 'Course Progress',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Messages',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '9',
        label: 'Inbox',
      },
      {
        key: '10',
        label: 'Send Message',
      },
      {
        key: '0',
        label: 'Notifications',
      },
    ],
  },
];
const MenuBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: 256,
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default MenuBar;