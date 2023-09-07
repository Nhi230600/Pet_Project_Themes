import { LogoutOutlined, QqOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Space } from "antd";
import { useState } from "react";
import { FONTSIZE } from "../../constants";
import AvatarUser from "../../images/avatar-user.jpeg";
import "./DrawerContent.css";
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
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
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
          <span style={{ fontSize: FONTSIZE.text }}>Truong Y Nhi</span>
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
          //   items={items}
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
            <a href="/profile" style={{ color: "white" }}>
              Thông tin cá nhân
            </a>
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
            <a href="/mypet" style={{ color: "white" }}>
              Thú cưng của tôi
            </a>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} title="Đăng xuất">
            <a href="">Đăng xuất</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default DrawerContent;