import React from "react";
import "./Nav.css";
import { FONTSIZE } from "../../constants";

const Nav = () => {
  return (
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
  );
};

export default Nav;
