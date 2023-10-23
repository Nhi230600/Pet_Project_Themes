import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Menu } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import DrawerContent from "components/DrawerContent";
import LoginRegister from "components/LoginRegister";
import LogoNav from "components/LogoHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const accountJson = sessionStorage.getItem("account");
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Dữ liệu cho dropdown "Dịch vụ"

  const blogMenu = (
    <Menu>
      <Menu.Item>
        <a href="https://mypet.vn/chia-se-kinh-nghiem-cham-soc-thu-cung/">
          Chia sẻ kinh nghiệm
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://taphoamakudo.vn/pages/chamsocthucungtainha">
          Dịch vụ tại nhà
        </a>
      </Menu.Item>
      <Menu.Item>
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
        <Link to="/" className="nav-link">
          <a>
            {" "}
            <LogoNav />
          </a>
        </Link>
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
            <Link to="/" className="nav-link">
              <a>Trang chủ</a>
            </Link>
          </li>

          <li className="nav-item">
            <Dropdown overlay={blogMenu} trigger={["click"]}>
              <a className="nav-link" href="#">
                Blog
              </a>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              <a>Liên hệ</a>
            </Link>
          </li>
          <li className="nav-i-booking">
            <Link to="/booking" className="nav-booking">
              <a>Booking</a>
            </Link>
          </li>
        </ul>
        {accountJson ? (
          <div className="header-user">
            <button className="header-user-button" onClick={showDrawer}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
            <Drawer
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <DrawerContent />
            </Drawer>
          </div>
        ) : (
          <div className="nav-log">
            <LoginRegister />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
