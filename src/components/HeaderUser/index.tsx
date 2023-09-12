import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QqOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { COLORS, FONTCOLOR, FONTSIZE } from "../../constants";
import Logo from "../../images/logo.png";
import DrawerContent from "../DrawerContent";

import "./headerUser.css";
const items = [
  {
    label: "Thông tin cá nhân",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Thú cưng của tôi",
    key: "2",
    icon: <QqOutlined />,
  },
  {
    label: "Đăng xuất",
    key: "3",
    icon: <LogoutOutlined />,
  },
];


const HeaderUser = () => {
  const backgroundColor = COLORS.primary;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e: any) => {
    setPlacement(e.target.value);
  };

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
            <button
              style={{ fontSize: FONTSIZE.text }}
              className="header-search-search-action"
            >
              <SearchOutlined />
            </button>
          </div>
        </div>
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
      </div>
      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>
        <ul className="header-nav-list">
          <li className="header-nav-list-name">
            <a className="header-nav-list-homepage" href="">
              TRANG CHỦ
            </a>
          </li>
          <li className="header-nav-list-name">
            <a className="header-nav-list-service" href="">
              DỊCH VỤ
            </a>
            <ul className="header-nav-list-sub">
              <li data-url="#">
                <a>Cắt tỉa lông tại nhà</a>
              </li>
              <li>
                <a href="#">Tắm - Vệ sinh tại nhà</a>
              </li>
              <li>
                <a href="#">Combo tốt nhất</a>
              </li>
            </ul>
          </li>
          <li className="header-nav-list-name">
            <a className="header-nav-list-blog" href="">
              BLOG
            </a>
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
          <li className="header-nav-list-name">
            <a className="header-nav-list-booking">
              ONLINE BOOKING <i className="fas fa-paper-plane"></i>
            </a>
            <ul className="header-nav-list-sub">
              <li>
                <a href="/bookspa">Đặt lịch Spa</a>
              </li>
              <li>
                <a href="/bookcare">Đặt lịch khám bệnh</a>
              </li>
              <li>
                <a href="/booktrainer">Đặt lịch huấn luyện</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderUser;
