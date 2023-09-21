import "./LogoHeader.css";
import Logo from "../../images/logo1.png";

const LogoNav = () => {
  return (
    <div className="logo-header">
      <img className="logo-header-image" src={Logo} alt="Logo" />
      <span className="logo-header-name">PetsLove</span>
    </div>
  );
};

export default LogoNav;
