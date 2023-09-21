
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

  return (
    <header className="header">

      <div className="header-nav" >

        <LogoHeader />
        <Search />
        {account ? (
          <div className="header-user" >
            <button
           
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



    </header>
  );
};

export default Header;
