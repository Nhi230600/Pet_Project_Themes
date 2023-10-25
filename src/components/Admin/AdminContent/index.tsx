import { Content } from "antd/lib/layout/layout";
import React from "react";
import "./AdminDashboard.css";

interface ContentDashboardProps {
  content: React.ReactNode;
}

const ContentDashboard: React.FC<ContentDashboardProps> = ({ content }) => {
  return (
    <div>
      <Content>
        <div
          style={{
            padding: 5,
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
