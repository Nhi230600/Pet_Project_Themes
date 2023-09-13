import React from "react";
import "./ContentDashboard.css";
import { Content } from "antd/lib/layout/layout";
import DashboardPage from "../../screens/DashBoard";

const ContentDashboard = () => {
  return (
    <div>
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
          <DashboardPage />
        </div>
      </Content>
    </div>
  );
};

export default ContentDashboard;
