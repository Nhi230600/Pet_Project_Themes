import { Footer } from "antd/lib/layout/layout";
import { FONTSIZE } from "../../constants";
import Logo from "../../images/logo.png";

const FooterDashboard = () => {
  return (
    <Footer
      className="container-dashboard-footer"
      style={{
        textAlign: "center",
        width: "100%",
        fontSize: FONTSIZE.text,
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "20vw", height: "auto" }} />
      NgáoService ©2023 Created by NgáoService
    </Footer>
  );
};

export default FooterDashboard;
