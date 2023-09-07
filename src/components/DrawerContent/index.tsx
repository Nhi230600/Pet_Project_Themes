import { LogoutOutlined, QqOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Avatar, Space } from "antd";
import { useState } from "react";
import "./DrawerContent.css";
import AvatarUser from "../../images/avatar-user.jpeg";
import { COLORS, FONTSIZE } from "../../constants";
import SubMenu from "antd/lib/menu/SubMenu";

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
  const handleLogout = () => {
    // Clear the user's session data or authentication token here
    // For example, to clear sessionStorage:
    sessionStorage.clear();

    // Redirect to the logout URL or perform any other necessary actions
    // For example, to redirect to a logout page:
    window.location.href = "/";
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
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} title="Đăng xuất">
            <a href="">Đăng xuất</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default DrawerContent;
