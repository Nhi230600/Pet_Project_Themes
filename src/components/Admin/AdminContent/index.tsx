import { Content } from "antd/lib/layout/layout";
import React from "react";
import "./AdminDashboard.css";

interface ContentDashboardProps {
  content: React.ReactNode;
}

const ContentDashboard: React.FC<ContentDashboardProps> = ({ content }) => {
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
          {content}
        </div>
      </Content>
    </div>
  );
};

export default ContentDashboard;
