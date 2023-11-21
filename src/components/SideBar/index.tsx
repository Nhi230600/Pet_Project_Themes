import {
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/dashboard");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  const accountJson = sessionStorage.getItem("account");
  return (
    <div className="sidebar">
      {accountJson === "2" ? (
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/admin",
            },
            {
              label: "Danh sách nhân viên",
              key: "/admin/employee",
              icon: <UserOutlined />,
            },
            {
              label: "Danh sách dịch vụ",
              key: "/admin/service",
              icon: <UserOutlined />,
            },
            {
              label: "Danh sách khách hàng",
              key: "/admin/customer",
              icon: <UserOutlined />,
            },
            {
              label: "Home",
              key: "/",
              icon: <LogoutOutlined />,
            },
          ]}
        ></Menu>
      ) : (
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/employee",
            },
            {
              label: "Home",
              key: "/",
              icon: <LogoutOutlined />,
            },
          ]}
        ></Menu>
      )}
    </div>
  );
};
export default SideBar;
