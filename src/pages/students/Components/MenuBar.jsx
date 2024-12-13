import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Typography,
  Dropdown,
  Button
} from "antd";
import {
  PlayCircleOutlined,
  HistoryOutlined,
  StarOutlined,
  SettingOutlined,
  BookOutlined,
  FileTextOutlined,
  CaretDownOutlined
} from "@ant-design/icons";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["playground"]);

  const enterpriseMenu = [
    {
      key: "1",
      label: "Switch Enterprise",
    },
    {
      key: "2",
      label: "Manage Enterprises",
    },
  ];

  const userMenu = [
    {
      key: "1",
      label: "Profile Settings",
    },
    {
      key: "2",
      label: "Sign Out",
    },
  ];

  return (
    <Layout.Sider
      theme="dark"
      width={260}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ height: "100vh" }}
    >
      {/* Enterprise Dropdown */}
      <div style={{ padding: "16px" }}>
        <Dropdown menu={{ items: enterpriseMenu }} trigger={["click"]}>
          <Button type="text" style={{ width: "100%", color: "white" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#1890ff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  A
                </div>
                {!collapsed && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography.Text strong style={{ color: "white" }}>
                      Acme Inc
                    </Typography.Text>
                    <Typography.Text style={{ color: "#bfbfbf", fontSize: "12px" }}>
                      Enterprise
                    </Typography.Text>
                  </div>
                )}
              </div>
              {!collapsed && <CaretDownOutlined />}
            </div>
          </Button>
        </Dropdown>
      </div>

      {/* Menu Items */}
      <div style={{ marginTop: "16px" }}>
        <Typography.Text style={{ paddingLeft: "24px", color: "#bfbfbf", fontSize: "12px" }}>
          Platform
        </Typography.Text>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
          onSelect={({ selectedKeys }) => setSelectedKeys(selectedKeys)}
          items={[
            {
              key: "playground",
              icon: <PlayCircleOutlined />,
              label: "Playground",
              children: [
                {
                  key: "history",
                  icon: <HistoryOutlined />,
                  label: "History",
                },
                {
                  key: "starred",
                  icon: <StarOutlined />,
                  label: "Starred",
                },
                {
                  key: "settings",
                  icon: <SettingOutlined />,
                  label: "Settings",
                },
              ],
            },
            {
              key: "models",
              icon: <BookOutlined />,
              label: "Models",
            },
            {
              key: "documentation",
              icon: <FileTextOutlined />,
              label: "Documentation",
            },
            {
              key: "settings",
              icon: <SettingOutlined />,
              label: "Settings",
            },
          ]}
        />
      </div>

      {/* User Dropdown */}
      <div style={{ position: "absolute", bottom: "0", width: "100%", padding: "16px" }}>
        <Dropdown menu={{ items: userMenu }} trigger={["click"]}>
          <Button type="text" style={{ width: "100%", color: "white" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Avatar size="small" src="/placeholder.svg" />
                {!collapsed && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography.Text strong style={{ color: "white" }}>
                      shadcn
                    </Typography.Text>
                    <Typography.Text style={{ color: "#bfbfbf", fontSize: "12px" }}>
                      m@example.com
                    </Typography.Text>
                  </div>
                )}
              </div>
              {!collapsed && <CaretDownOutlined />}
            </div>
          </Button>
        </Dropdown>
      </div>
    </Layout.Sider>
  );
};

export default Sidebar;
