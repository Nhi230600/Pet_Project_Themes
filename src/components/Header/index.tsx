
import { COLORS, FONTCOLOR, FONTSIZE } from "../../application/config/constants";
import { Drawer } from "antd";
import LoginRegister from "../LoginRegister";
import LogoHeader from "../LogoHeader";
import Nav from "../Nav";
import Search from "../Search";
import "./Header.css";
import DrawerContent from "../DrawerContent";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const Header = () => {

  const accountJson = sessionStorage.getItem("account");
  const [collapsed, setCollapsed] = useState(false);
  const [placement, setPlacement] = useState("left");

  let account;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  if (accountJson !== null) {
    account = JSON.parse(accountJson);
  } else {
    account = null; // or provide a default value
  }

  const backgroundColor = COLORS.primary;
  return (
    <header className="header" style={{ backgroundColor }}>

      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>

        <LogoHeader />
        <Search />
        {account ? (
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
        ) : (
          <LoginRegister />
        )}


      </div>
      <div className="header-nav" style={{ fontSize: FONTSIZE.textNav }}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
