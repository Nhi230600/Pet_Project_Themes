import { useState } from "react";
import LoginRegister from "../LoginRegister";
import LogoHeader from "../LogoHeader";
import Nav from "../Nav";
import Search from "../Search";

import "./Header.css";

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

  return (
    <header className="header">
      <div className="header-content">
        <LogoHeader />
        <Nav />
        <div className="header-login-register">
          <LoginRegister />
        </div>
      </div>
    </header>
  );
};

export default Header;
