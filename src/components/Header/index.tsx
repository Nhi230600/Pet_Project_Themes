import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QqOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

import { useState } from "react";
import { COLORS, FONTCOLOR, FONTSIZE } from "../../constants";
import { Menu, Drawer } from "antd";
import Logo from "../../images/logo.png";
import LoginPage from "../../screens/LoginPage/LoginPage";
import RegisterPage from "../../screens/RegisterPage/RegisterPage";
import DrawerContent from "../DrawerContent";
import "./Header.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";




const Header = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [placement, setPlacement] = useState("left");
  const [open, setOpen] = useState(false);
  const accountJson = sessionStorage.getItem('account');


  let account;


  if (accountJson !== null) {
    account = JSON.parse(accountJson);
  } else {
    account = null; // or provide a default value
  }
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };
  const handleCancelLogin = () => {
    setIsModalLoginOpen(false);
  };

  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };
  const handleCancelRegister = () => {
    setIsModalRegisterOpen(false);
  };

  const backgroundColor = COLORS.primary;
  return (
    <header className="header" style={{ backgroundColor }}>
      <div className="header-logo-search">
        <div className="header-logo">
          <img className="header-logo-image" src={Logo} alt="Logo" />
          <a
            href=""
            style={{
              textDecoration: "none",
              fontSize: FONTSIZE.logoLarge,
              color: FONTCOLOR.primary,
            }}
          >
            <span className="header-logo-name">NgáoService</span>
          </a>
        </div>
        <div className="header-search">
          <div className="header-search-input">
            <input
              placeholder="Tìm kiếm tại đây..."
              style={{
                width: "100%",
                height: "3vw",
                borderRadius: "0.3rem",
                border: "none",
              }}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="header-search-search">
            <button className="header-search-search-action">
              <SearchOutlined />
            </button>
          </div>
        </div>
        {!account ? (
          <div
            className="header-button"
            style={{ fontSize: FONTSIZE.textButton }}
          >
            <div className="header-button-login">
              <button
                className="header-button-login-action"
                onClick={showModalLogin}
              >
                Đăng nhập
              </button>
              <Modal
                width={800}
                open={isModalLoginOpen}
                onCancel={handleCancelLogin}
                footer={[]}
              >
                <LoginPage />
              </Modal>
            </div>
            <div className="header-button-register">
              <button
                className="header-button-register-action"
                onClick={showModalRegister}
              >
                Đăng ký
              </button>
              <Modal
                width={800}
                open={isModalRegisterOpen}
                onCancel={handleCancelRegister}
                footer={[]}
              >
                <RegisterPage />
              </Modal>
            </div>
          </div>
        ) : (
          <div className="header-user" style={{ fontSize: FONTSIZE.textButton }}>
            <button
              style={{ fontSize: FONTSIZE.text }}
              className="header-user-button"
              onClick={showDrawer}
            >
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
        )

        }
      </div>
      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>
        <ul className="header-nav-list">
          <li className="header-nav-list-name">

            <Link to="/">TRANG CHỦ</Link>

          </li>
          <li className="header-nav-list-name">

            <Link to="/service">Dịch vụ</Link>

            <ul className="header-nav-list-sub">
              <li data-url="#">
                <Link to="/service">Spa</Link>
              </li>
              <li>
                <Link to="/service">Huấn luyện</Link>

              </li>
              <li>
                <Link to="/service">Chăm sóc sức khỏe</Link>

              </li>
            </ul>
          </li>
          <li className="header-nav-list-name">
            <Link to="/blog">Blog</Link>
            <ul className="header-nav-list-sub">
              <li>
                <a href="https://mypet.vn/chia-se-kinh-nghiem-cham-soc-thu-cung/">
                  Chia sẻ kinh nghiệm
                </a>
              </li>
              <li>
                <a href="https://taphoamakudo.vn/pages/chamsocthucungtainha">
                  Dịch vụ tại nhà
                </a>
              </li>
              <li>
                <a href="https://nuoicun.com/category/goc-giai-tri/">
                  Góc giải trí
                </a>
              </li>
            </ul>
          </li>
          <li className="header-nav-list-name">
            <a href="contact.html" className="navContact">
              LIÊN HỆ
            </a>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
