import React from "react";
import { Card, Descriptions, Typography, Avatar, Button } from "antd";
import { EditOutlined } from "@ant-design/icons"; // Import biểu tượng EditOutlined từ Ant Design
import "antd/dist/antd.css";
import "./EmployeeDetailPage.css";
import { Link } from "react-router-dom";

const { Text } = Typography;

const EmployeeDetailPage = () => {
  const employee = {
    name: "Nguyễn Văn A",
    type: "Bác sĩ",
    account: "nvana",
    password: "password123",
    qualification: "Bác sĩ chuyên khoa nội",
    experience: 5,
    avatarUrl: "URL_Hinh_Avatar_Cua_Ban",
  };

  return (
    <div className="EmployeeDetailPage">
      <h1>Chi tiết nhân viên</h1>
      <Card title={employee.name} className="employee-card" cover={<Avatar size={150} src={employee.avatarUrl} />}>
      <Link to="/employee/edit"> {/* Sử dụng Link để liên kết đến trang "employee/edit" */}
          <Button type="primary" icon={<EditOutlined />} className="edit-button">
            Sửa thông tin
          </Button>
        </Link>
        <Descriptions layout="vertical">
          <Descriptions.Item label="Chức vụ">{employee.type}</Descriptions.Item>
          <Descriptions.Item label="Tài khoản">{employee.account}</Descriptions.Item>
          <Descriptions.Item label="Mật khẩu">
            <Text code>{employee.password}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Bằng cấp">{employee.qualification}</Descriptions.Item>
          <Descriptions.Item label="Kinh nghiệm">{employee.experience} năm</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default EmployeeDetailPage;
