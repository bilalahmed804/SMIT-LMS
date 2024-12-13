import React from "react";
import MainLogo from "../../../../src/assets/image/images.png"
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  StarOutlined,
  HistoryOutlined,
  SettingOutlined,
  FolderOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideBarMenu = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        theme="light"
        width={300}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" style={{ color: "black", fontSize: "20px" , padding:'16px' }}>
          <img src={MainLogo} alt="" className="w-16"/>
          <strong className="">SMIT LMS</strong>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            DashBoard
          </Menu.Item>
          <Menu.Item key="2" icon={<MailOutlined />}>
            Courses
          </Menu.Item>
          {/* Assignments Folder */}
          <Menu.SubMenu key="7" icon={<FolderOutlined />} title="Assignments">
            <Menu.Item key="7-1">Submit Assignment</Menu.Item>
            <Menu.Item key="7-2">View Assignments</Menu.Item>
            <Menu.Item key="7-3">Grades & Feedback</Menu.Item>
            <Menu.Item key="7-4">Quizzes</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          

         
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideBarMenu;
