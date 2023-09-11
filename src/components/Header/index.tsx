import { COLORS, FONTSIZE } from "../../constants";
import LoginRegister from "../LoginRegister";
import LogoHeader from "../LogoHeader";
import Nav from "../Nav";
import Search from "../Search";
import "./Header.css";

const Header = () => {
  const backgroundColor = COLORS.primary;
  return (
    <header className="header" style={{ backgroundColor }}>
      <div className="header-logo-search">
        <LogoHeader />
        <Search />
        <LoginRegister />
      </div>
      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
