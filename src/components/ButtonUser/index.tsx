import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import DrawerContent from "../DrawerContent";
import "./ButtonUser.css";

const ButtonUser = () => {
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
    <div className="header-user">
      <button className="header-user-button" onClick={showDrawer}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
      <Drawer closable={false} onClose={onClose} open={open} key={placement}>
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default ButtonUser;
