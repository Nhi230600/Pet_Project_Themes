import React from "react";
import "./AdminDashboard.css";
import { Content } from "antd/lib/layout/layout";

// Định nghĩa interface cho ContentDashboardProps
interface ContentDashboardProps {
  content: React.ReactNode; // Prop content với kiểu React.ReactNode
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
