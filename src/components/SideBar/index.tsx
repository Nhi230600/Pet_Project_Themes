import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Content, Footer } from "antd/lib/layout/layout";
import { useState } from "react";
import { FONTSIZE } from "../../constants";
import Logo from "../../images/logo.png";
import "./SideBar.css";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container-sidebar">
      <Sider
        className="container-sidebar-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={300}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Danh sách nhân viên",
            },
          ]}
        />
      </Sider>
      <Layout className="container-sidebar-content">
        <div className="container-sidebar-content-header">
          <button
            style={{
              fontSize: FONTSIZE.text,
              cursor: "pointer",
              borderRadius: "0.2vw",
              border: "0.1vw solid black",
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "white",
            }}
          >
            Content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: FONTSIZE.text,
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{ width: "20vw", height: "auto" }}
          />
          NgáoService ©2023 Created by NgáoService
        </Footer>
      </Layout>
    </div>
  );
};

export default SideBar;
