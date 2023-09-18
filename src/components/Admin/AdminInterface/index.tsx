import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import SideBar from "../../SideBar";
import { FONTSIZE } from "../../../application/config/constants";
import "./AdminInterface.css";
import FooterDashboard from "../../FooterDashboard";
interface AdminInterfaceProps {
  content: React.ReactNode; // Interface này cho phép truyền bất kỳ thành phần nào vào content
}

const AdminInterface: React.FC<AdminInterfaceProps> = ({ content }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container-dashboard">
      <div className="container-dashboard-content">
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={200}
        >
          <SideBar />
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
          {content} {/* Hiển thị nội dung content tại đây */}
          <FooterDashboard />
        </Layout>
      </div>
    </div>
  );
};

export default AdminInterface;