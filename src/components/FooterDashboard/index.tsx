import { Footer } from "antd/lib/layout/layout";
import { LogoHeader } from "components";

const FooterDashboard = () => {
  return (
    <Footer
      className="container-dashboard-footer"
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      <LogoHeader />
      PetsLove ©2023 Created by PetsLove
    </Footer>
  );
};

export default FooterDashboard;
