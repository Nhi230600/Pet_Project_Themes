import { Footer } from "antd/lib/layout/layout";
import Logo from "../../images/logo.png";

const FooterDashboard = () => {
  return (
    <Footer
      className="container-dashboard-footer"
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "20vw", height: "auto" }} />
      PetsLove ©2023 Created by PetsLove
    </Footer>
  );
};

export default FooterDashboard;
