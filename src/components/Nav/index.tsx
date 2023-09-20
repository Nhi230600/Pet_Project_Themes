import React from "react";
import { Menu, Dropdown } from "antd";
import "./Nav.css";

const Nav = () => {
  // Dữ liệu cho dropdown "Dịch vụ"
  const serviceMenu = (
    <Menu>
      <Menu.Item key="1">
        <a>Cắt tỉa lông tại nhà</a>
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

  return (
    <div className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-list-name">
          <a className="header-nav-list-homepage" href="/">
            Trang chủ
          </a>
        </li>
        <li className="header-nav-list-name">
          <Dropdown overlay={serviceMenu} trigger={["hover"]}>
            <a className="header-nav-list-service" href="#">
              Dịch vụ
            </a>
          </Dropdown>
        </li>
        <li className="header-nav-list-name">
          <Dropdown overlay={blogMenu} trigger={["hover"]}>
            <a className="header-nav-list-blog" href="#">
              Blog
            </a>
          </Dropdown>
        </li>
        <li className="header-nav-list-name">
          <a href="/contact" className="navContact">
            Liên hệ
          </a>
        </li>
        <li className="header-nav-list-name">
          <a className="header-nav-list-booking" href="/bookspa">
            Booking
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
