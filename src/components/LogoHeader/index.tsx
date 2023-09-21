import "./LogoHeader.css";
import Logo from "../../images/logo1.png";

const LogoHeader = () => {
  return (
    <div className="logo-header">
      <img className="logo-header-image" src={Logo} alt="Logo" />
      <a href="">
        <span className="logo-header-name">PetsLove</span>
      </a>
    </div>
  );
};

export default LogoHeader;
