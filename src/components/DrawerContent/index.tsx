import {
  LogoutOutlined,
  QqOutlined,
  UserOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Space } from "antd";
import { useState } from "react";
import AvatarUser from "../../images/avatar-user.jpeg";

import "./DrawerContent.css";
import { Link, useNavigate } from "react-router-dom";
const items = [
  {
    label: <a href="">Thông tin cá nhân</a>,
    key: "user",
    icon: <UserOutlined />,
  },
  {
    label: <a href="">Thú cưng của tôi</a>,
    key: "pet",
    icon: <QqOutlined />,
  },
  {
    label: <a href="">Đăng xuất</a>,
    key: "logout",
    icon: <LogoutOutlined />,
  },
];

const rootSubmenuKeys = ["user", "pet"];
const DrawerContent = () => {
  const accountJson = sessionStorage.getItem("account");
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div className="drawer">
      <div className="drawer-user">
        <div className="drawer-user-avt">
          <Space wrap size={16}>
            <Avatar
              size={64}
              src={AvatarUser}
              style={{ border: "0.2vw solid black" }}
            />
          </Space>
        </div>
        <div className="drawer-user-name">
          <span>Ngoc ne</span>
        </div>
      </div>
      <div className="drawer-detail">
        <Menu
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 295,
            fontSize: "1.2vw",
            borderRadius: "0.5vw",
            padding: "1rem",
          }}
        >
          <Menu.Item
            key="user"
            icon={<UserOutlined />}
            title="Thông tin cá nhân"
            style={{
              borderBottom: "0.1vw solid black",
              border: "0.1vw solid black",
              borderRadius: "0.5vw",
            }}
            className="menu-item-user"
          >
            <Link to="/profile">
              {" "}
              <a style={{ color: "white" }}>Thông tin cá nhân</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="pet"
            icon={<QqOutlined />}
            title="Thú cưng của tôi"
            style={{
              borderBottom: "0.1vw solid black",
              border: "0.1vw solid black",
              borderRadius: "0.5vw",
            }}
            className="menu-item-pet"
          >
            <Link to="/mypet">
              <a style={{ color: "white" }}>Thú cưng của tôi</a>
            </Link>
          </Menu.Item>
          {accountJson && accountJson === "2" && (
            <Menu.Item
              key="pet"
              icon={<ControlOutlined />}
              title="Admin Panel"
              style={{
                borderBottom: "0.1vw solid black",
                border: "0.1vw solid black",
                borderRadius: "0.5vw",
              }}
              className="menu-item-pet"
            >
              <Link to="/admin">
                <a style={{ color: "white" }}>Admin Panel</a>
              </Link>
            </Menu.Item>
          )}
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            title="Đăng xuất"
          >
            <a href="">Đăng xuất</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default DrawerContent;
