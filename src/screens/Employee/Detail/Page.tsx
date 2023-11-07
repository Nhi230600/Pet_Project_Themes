import {
  CalendarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarOutlined,
  EditOutlined,
  FacebookFilled,
  InstagramOutlined,
  PlusOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  DatePicker,
  List,
  Modal,
  Pagination,
  Tag,
  Typography,
} from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./EmployeeDetailPage.css";
import ShiftsOfDay from "./ShiftsOfDay";
import {
  EmployeeData,
  Employee,
  Appointment,
  initialAppointments,
} from "components";

const { Text } = Typography;

const EmployeeDetailPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee>({
    account: "",
    appointment: 0,
    avatar: "",
    description: "",
    exp: 0,
    gender: "",
    id: 0,
    name: "",
    password: "",
    position: "",
    type: "",
  });
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  useEffect(() => {
    const selectedEmployee = EmployeeData.find(
      (emp) => emp.id.toString() === id,
    );

    if (selectedEmployee) {
      setEmployee(selectedEmployee);
      const filteredAppointments = initialAppointments.filter(
        (appointment) => appointment.idEmployee.toString() === id,
      );

      setAppointments(filteredAppointments);
    } else {
      toast.error("Không tìm thấy nhân viên");
    }
  }, []);

  const pageSize = 3;
  const totalItems = appointments.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const totalAppointments = appointments.length;

  // Tính toán số đơn hoàn thành
  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === 1,
  ).length;

  // Tính toán số đơn bị hủy
  const canceledAppointments = appointments.filter(
    (appointment) => appointment.status === 2,
  ).length;

  return (
    <div className="employee-detail-page">
      <h1>Chi tiết nhân viên</h1>

      <div className="block">
        <div className="block-1">
          <Card
            className="employee-card"
            actions={[
              <FacebookFilled style={{ color: "blue" }} />,
              <TwitterOutlined style={{ color: "skyblue" }} />,
              <InstagramOutlined style={{ color: "skyblue" }} />,
              <YoutubeFilled style={{ color: "red" }} />,
            ]}
            cover={<div className="color-background"> {employee.name}</div>}
          >
            <Card.Meta
              className="avatar-profile-card"
              avatar={<Avatar size={150} src={employee.avatar}></Avatar>}
            ></Card.Meta>

            <Text className="profile-text">
              <strong>Chức vụ:</strong> {employee.position}
            </Text>

            <br />
            <Text className="profile-text">
              <strong>Kinh nghiệm:</strong> {employee.exp} năm
            </Text>
            <Link to={`edit`}>
              <Button icon={<EditOutlined />} className="editButton">
                Sửa thông tin
              </Button>
            </Link>
          </Card>
        </div>
        <div className="block-2">
          <div className="appointment">
            <Card className="appointment-card total-appointments">
              <div className="card-content-1">
                <CalendarOutlined className="icon-detail-employee" />
                <div className="appointment-card-in">
                  <Text>Tổng số đơn hẹn</Text>
                  <br />
                  <Text className="appointment-card-number">
                    {totalAppointments}
                  </Text>
                </div>
              </div>
            </Card>

            <Card className="appointment-card completed-appointments">
              <div className="card-content-1">
                <CheckCircleOutlined className="icon-detail-employee" />
                <div className="appointment-card-in">
                  <Text>Đơn hoàn thành</Text>
                  <br />
                  <Text className="appointment-card-number">
                    {completedAppointments}
                  </Text>
                </div>
              </div>
            </Card>

            <Card className="appointment-card canceled-appointments">
              <div className="card-content-1">
                <CloseCircleOutlined className="icon-detail-employee" />
                <div className="appointment-card-in">
                  <Text>Số đơn bị hủy</Text>
                  <br />
                  <Text className="appointment-card-number">
                    {canceledAppointments}
                  </Text>
                </div>
              </div>
            </Card>
            <Card className="appointment-tab">
              <Card title="Thông tin buổi hẹn" className="shift">
                <div className="status-icon">
                  <CalendarOutlined />
                </div>
                <List
                  dataSource={appointments.slice(startIndex, endIndex)}
                  renderItem={(appointment) => (
                    <List.Item className="appointment-item">
                      <div className="date-info">
                        <Text className="date-text">{appointment.time}</Text>
                      </div>
                      <div className="appointment-details">
                        <Text>{appointment.customerName}</Text>
                        <br />
                        <Text>{appointment.time}</Text>
                      </div>
                      <div className="status-button">
                        {appointment.status === 1 ? (
                          <Tag className="status completed">
                            <CheckCircleOutlined className="icon-status" />
                            <span>Hoàn thành</span>
                          </Tag>
                        ) : appointment.status === 2 ? (
                          <Tag className="status canceled">
                            <CloseCircleOutlined className="icon-status" />
                            <span>Bị hủy</span>
                          </Tag>
                        ) : (
                          <Tag className="status pending">
                            <CalendarOutlined className="icon-status" />
                            <span>Đang chờ</span>
                          </Tag>
                        )}
                      </div>
                    </List.Item>
                  )}
                />
                <Pagination
                  current={currentPage}
                  onChange={handlePageChange}
                  pageSize={pageSize}
                  total={totalItems}
                  showSizeChanger={false} // Tắt tùy chọn thay đổi kích thước trang
                />
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
