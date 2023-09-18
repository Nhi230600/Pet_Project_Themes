import {
  AppstoreOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SideBarEmployee.css";
import { FONTSIZE } from "../../application/config/constants";

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
            icon: <AppstoreOutlined style={{ fontSize: FONTSIZE.logoSmall }} />,
            key: "/dashboardemp",
          },
          {
            label: "Thông tin cá nhân",
            key: "/employee/detail",
            icon: <UserOutlined style={{ fontSize: FONTSIZE.logoSmall }} />,
          },
          {
            label: "Đơn đặt lịch",
            key: "",
            icon: <SnippetsOutlined style={{ fontSize: FONTSIZE.logoSmall }} />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideBarEmployee;
