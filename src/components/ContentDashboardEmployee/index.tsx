import { Content } from "antd/lib/layout/layout";
import { DetailEmp } from "../../screens";
import "./ContentDashboardEmp.css";

const ContentDashboardEmployee = () => {
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
          <DetailEmp />
        </div>
      </Content>
    </div>
  );
};

export default ContentDashboardEmployee;
