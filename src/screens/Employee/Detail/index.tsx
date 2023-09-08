import React, { useState } from "react";
import { Card, Descriptions, Typography, Avatar, Button, Modal, DatePicker, List } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./EmployeeDetailPage.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const { Text } = Typography;

const EmployeeDetailPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [employee] = useState({
    name: "Nguyễn Văn A",
    type: "Bác sĩ",
    account: "nvana",
    password: "password123",
    qualification: "Bác sĩ chuyên khoa nội",
    experience: 5,
    avatarUrl: "URL_Hinh_Avatar_Cua_Ban",
    shifts: [
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-11", time: "13:00 - 17:00", status: 2 },
      { date: "2023-09-12", time: "09:00 - 11:00", status: 1 },
    ],
  });

  const handleStatusChange = (index: number) => {
    const updatedShifts = [...employee.shifts];
    if (updatedShifts[index].status === 1) {
      Modal.confirm({
        title: "Xác nhận",
        content: "Bạn có chắc chắn muốn đánh dấu ca nghỉ làm?",
        onOk() {
          updatedShifts[index].status = 2;
          toast.success("Cập nhật trạng thái thành công");
        },
        onCancel() { },
      });
    }
  };

  const filteredShifts = selectedDate
    ? employee.shifts.filter((shift) => shift.date === selectedDate)
    : [];

  return (
    <div className="EmployeeDetailPage">
      <h1>Chi tiết nhân viên</h1>
      <Card
        title={employee.name}
        className="employee-card"
        cover={<Avatar size={150} src={employee.avatarUrl} />}
      >
        <Link to="/employee/edit">
          <Button type="primary" icon={<EditOutlined />} className="edit-button">
            Sửa thông tin
          </Button>
        </Link>
        <Link to="/employee/add-shift">
          <Button type="primary" icon={<PlusOutlined />} className="add-shift-button">
            Thêm ca làm
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

        <div className="shift-filter">
          <DatePicker
            onChange={(date) => {
              if (date) {
                const selectedDate = date.format("YYYY-MM-DD");
                setSelectedDate(selectedDate);
              } else {
                setSelectedDate(null);
              }
            }}
          />
        </div>

        <h2>Ca làm trong ngày:</h2>
        <List
          dataSource={filteredShifts}
          renderItem={(shift, index) => (
            <Button
              key={index}
              className={`shift-button ${shift.status === 1 ? "green-status" : "gray-status"}`}
              onClick={() => handleStatusChange(index)}
            >
              {shift.time}
            </Button>
          )}
        />


      </Card>
    </div>
  );
};

export default EmployeeDetailPage;
