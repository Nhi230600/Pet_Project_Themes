import { FONTCOLOR, FONTSIZE } from "../../application/config/constants";
import "./LogoHeader.css";
import Logo from "../../images/logo.png";

const LogoHeader = () => {
  return (
    <div className="logoheader">
      <img className="logoheader-image" src={Logo} alt="Logo" />
      <a
        href=""
        style={{
          textDecoration: "none",
          fontSize: FONTSIZE.logoSmall,
          color: FONTCOLOR.primary,
        }}
      >
        <span className="logoheader-name">NgáoService</span>
      </a>
    </div>
  );
};

export default LogoHeader;
