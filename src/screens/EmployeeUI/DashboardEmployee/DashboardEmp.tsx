import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import ContentDashboard from "../../../components/ContentDashboard";
import FooterDashboard from "../../../components/FooterDashboard";
import SideBarEmployee from "../../../components/SideBarEmployee";
import { FONTSIZE } from "../../../constants";
import "./DashboardEmp.css";
import ContentDashboardEmployee from "../../../components/ContentDashboardEmployee";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container-dashboard">
      <div className="container-dashboard-content">
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={300}
        >
          <SideBarEmployee />
        </Sider>
        <Layout className="container-dashboard-content">
          <div className="container-dashboard-content-header">
            <button
              style={{
                fontSize: FONTSIZE.text,
                cursor: "pointer",
                borderRadius: "0.2vw",
                border: "0.1vw solid black",
                margin: "1rem 0 0 1rem",
              }}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
          </div>
          <ContentDashboardEmployee />
          <FooterDashboard />
        </Layout>
      </div>
    </div>
  );
};

export default Dashboard;
