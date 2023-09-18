import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FONTSIZE } from "../../application/config/constants";
import "./SideBar.css";

const SideBar = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/dashboard");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="sidebar">
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
            key: "/dashboard",
          },
          {
            label: "Danh sách nhân viên",
            key: "/employee",
            icon: <UserOutlined style={{ fontSize: FONTSIZE.logoSmall }} />,
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideBar;
