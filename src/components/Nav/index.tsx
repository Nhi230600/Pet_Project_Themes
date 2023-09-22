import { useState } from "react";
import { Menu, Dropdown } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import LoginRegister from "components/LoginRegister";
import LogoNav from "components/LogoHeader";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Trạng thái của menu

  // Dữ liệu cho dropdown "Dịch vụ"
  const serviceMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="#">Cắt tỉa lông tại nhà</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="#">Tắm - Vệ sinh tại nhà</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="#">Combo tốt nhất</a>
      </Menu.Item>
    </Menu>
  );

  const blogMenu = (
    <Menu>
      <Menu.Item key="4">
        <a href="https://mypet.vn/chia-se-kinh-nghiem-cham-soc-thu-cung/">
          Chia sẻ kinh nghiệm
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="https://taphoamakudo.vn/pages/chamsocthucungtainha">
          Dịch vụ tại nhà
        </a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="https://nuoicun.com/category/goc-giai-tri/">Góc giải trí</a>
      </Menu.Item>
    </Menu>
  );

  // Hàm xử lý khi nút menu được nhấn
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // Đảo ngược trạng thái của menu
  };

  return (
    <nav
      className={`navbar navbar-expand-sm navbar-light ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="nav-logo">
        <LogoNav />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleMenuClick}
      >
        <span className="navbar-toggler-icon navbar-toggler-icon-sm"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Trang chủ
            </a>
          </li>
          <li className="nav-item">
            <Dropdown overlay={serviceMenu} trigger={["click"]}>
              <a className="nav-link" href="#">
                Dịch vụ
              </a>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Dropdown overlay={blogMenu} trigger={["click"]}>
              <a className="nav-link" href="#">
                Blog
              </a>
            </Dropdown>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Liên hệ
            </a>
          </li>
          <li className="nav-i-booking">
            <a className="nav-booking" href="/bookspa">
              Booking
            </a>
          </li>
        </ul>
        <div className="nav-log">
          <LoginRegister />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
