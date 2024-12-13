import React, { useState } from "react";
import MainLogo from "../../../../src/assets/image/Smit Logo.png"
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  StarOutlined,
  HistoryOutlined,
  SettingOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideBarMenu = () => {
  const [activecolor, setActiveColor] = useState(null)
  const session = {
    name: 'Huzaifa',
    email: 'huzaifa@gmail.com',
    image: 'https://res.cloudinary.com/saylani-welfare/image/upload/v1696079905/SMIT/Students/4210116061441.jpg'
  }
  return (
    <Layout className="border-red-700" style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        theme="light"
        width={250}
        className="border-4"
      >
        <div className="logo my-3 flex justify-center items-center" style={{ color: "black", fontSize: "20px", padding: '16px' }}>
          <img src={MainLogo} alt="" className="w-24" />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/student/dashboard">DashBoard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MailOutlined />}>
            <Link to="/student/courses">Courses</Link>
          </Menu.Item>

          {/* Assignments Folder */}
          <Menu.SubMenu key="7" icon={<FolderOutlined />} title="Assignments">
            <Menu.Item key="7-2">
              <Link to="/student/assignment">  View Assignments</Link>
            </Menu.Item>
            <Menu.Item key="7-3">
              <Link to="/student/feedback"> Grades & Feedback</Link>

            </Menu.Item>

          </Menu.SubMenu>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link to="/student/settings">Settings</Link>
          </Menu.Item>



        </Menu>
      </Sider>
    </Layout >
  );
};

export default SideBarMenu;
