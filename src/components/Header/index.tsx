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
import { COLORS, FONTCOLOR, FONTSIZE } from "../../application/config/constants";
import { Menu, Drawer } from "antd";
import Logo from "../../images/logo.png";
import LoginPage from "../../screens/LoginPage/LoginPage";
import RegisterPage from "../../screens/RegisterPage/RegisterPage";
import DrawerContent from "../DrawerContent";
import LoginRegister from "../LoginRegister";
import LogoHeader from "../LogoHeader";
import Nav from "../Nav";
import Search from "../Search";

import "./Header.css";
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
  const accountJson = sessionStorage.getItem("account");

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
      
      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>
        
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
