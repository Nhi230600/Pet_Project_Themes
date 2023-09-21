import {
  AppstoreOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBarEmployee.css";

const SideBarEmployee = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/dashboard");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="sidebar" style={{ justifyContent: "center" }}>
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
            key: "/dashboardemp",
          },
          {
            label: "Thông tin cá nhân",
            key: "/employee/detail",
            icon: <UserOutlined />,
          },
          {
            label: "Đơn đặt lịch",
            key: "",
            icon: <SnippetsOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideBarEmployee;
