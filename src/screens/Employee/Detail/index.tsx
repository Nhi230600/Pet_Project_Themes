import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Descriptions, Typography, Avatar, Button, Modal, DatePicker, List, } from "antd";
import { EditOutlined, PlusOutlined, CheckCircleOutlined, CloseCircleOutlined, CalendarOutlined, DollarOutlined, FacebookFilled, TwitterOutlined, InstagramOutlined, YoutubeFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./EmployeeDetailPage.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ShiftsOfDay from "./ShiftsOfDay";

const { Text } = Typography;

const EmployeeDetailPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showShifts, setShowShifts] = useState(true);

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
      { date: "2023-09-10", time: "08:00 - 12:00", status: 1 },
      { date: "2023-09-11", time: "13:00 - 17:00", status: 2 },
      { date: "2023-09-12", time: "09:00 - 11:00", status: 1 },
    ],
    appointments: [
      { date: "2023-09-10", time: "08:00 - 09:00", status: 1, service: "Trị bệnh ngu", price: "10" },
      { date: "2023-09-11", time: "10:00 - 11:00", status: 2, service: "Khai sáng tâm hồn", price: "10" },
      { date: "2023-09-12", time: "14:00 - 15:00", status: 3, service: "Thông não", price: "10" },
    ],
  });
  const tabList = [
    {
      key: 'tab1',
      tab: 'Ca làm',
    },
    {
      key: 'tab2',
      tab: 'Buổi hẹn',
    },
  ];
  const contentList: Record<string, React.ReactNode> = {
    tab1: <Card title="Ca làm trong ngày " className="shift">
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
      <ShiftsOfDay
        shifts={employee.shifts}
        onStatusChange={(index) => handleStatusChange(index)}
        selectedDate={selectedDate}
      />
      <Link to="/employee/add-shift">
        <Button type="primary" icon={<PlusOutlined />} className="add-shift-button">
          Thêm ca làm
        </Button>
      </Link>
    </Card>,
    tab2: <Card title="Thông tin buổi hẹn" className="shift">
      <div className="status-icon">
        <CalendarOutlined />
      </div>
      <List
        dataSource={employee.appointments}
        renderItem={(appointment, index) => (
          <List.Item className="appointment-item">
            <div className="date-info">
              <Text className="date-text">{appointment.date}</Text>
            </div>
            <div className="appointment-details">
              <Text>{appointment.service}</Text>
              <br />
              <Text>{appointment.time}</Text>
            </div>
            <div className="status-button">
              {appointment.status === 1 ? (
                <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center">
                  <CheckCircleOutlined className="mr-1" />
                  Hoàn thành
                </button>
              ) : appointment.status === 2 ? (
                <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center">
                  <CloseCircleOutlined className="mr-1" />
                  Bị hủy
                </button>
              ) : (
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center">
                  <CalendarOutlined className="mr-1" />
                  Đang chờ
                </button>
              )}
            </div>


            <div className="price-info">
              <DollarOutlined />
              <Text className="price-text">{appointment.price}</Text>
            </div>
          </List.Item>
        )}
      />
    </Card>,
  };
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
 

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  
  const totalAppointments = employee.appointments.length;

  // Tính toán số đơn hoàn thành
  const completedAppointments = employee.appointments.filter(
    (appointment) => appointment.status === 1
  ).length;

  // Tính toán số đơn bị hủy
  const canceledAppointments = employee.appointments.filter(
    (appointment) => appointment.status === 2
  ).length;
  const handleStatusChange = (index: number) => {
    const updatedShifts = [...employee.shifts];

    if (updatedShifts[index].status === 1) {
      Modal.confirm({
        title: "Xác nhận",
        content: "Bạn có chắc chắn muốn đánh dấu hoàn thành?",
        onOk() {
          toast.success("Cập nhật trạng thái thành công");
        },
        onCancel() { },
      });
    }
  };

  return (
    <div className="EmployeeDetailPage">
      <h1>Chi tiết nhân viên</h1>

      <div className="row">
        <div className="col-4 profile">
          <Card

            actions={[
              <FacebookFilled style={{ color: 'blue' }} />,
              <TwitterOutlined style={{ color: 'skyblue' }} />,
              <InstagramOutlined style={{ color: 'skyblue' }} />,
              <YoutubeFilled style={{ color: "red" }} />
            ]}
            cover={
              <div
                style={{
                  height: 150,
                  width: '100%',
                  background: 'rgba(6, 127, 161, 0.2)',
                  color: 'white',
                  fontSize: 30,
                  paddingTop: 20,
                  fontFamily: 'cursive'
                }}
              >
                {employee.name}
              </div>
            }
            className="employee"
          // cover={<Avatar size={150} src={employee.avatarUrl} />}
          >
            <Card.Meta
              className="avatar"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: -50,
              }}
              avatar={<Avatar
                size={70}
                src={employee.avatarUrl}>

              </Avatar>}
              title={employee.account}
              description={employee.password}
            >

            </Card.Meta>

            <div></div>
            <Text className="profile-text">Chức vụ: {employee.type}</Text>
            <br />
            <Text className="profile-text">Bằng cấp: {employee.qualification}</Text>
            <br />
            <Text className="profile-text">Kinh nghiệm: {employee.experience} năm</Text>
            <Link to="/employee/edit">
              <Button type="primary" icon={<EditOutlined />} className="">
                Sửa thông tin
              </Button>
            </Link>
          </Card>

        </div>
        <div className="col-8">

          <div>
            <div className="appointment">
              <Card className=" appointment-card" >
                <Text>Tổng số đơn hẹn</Text>
                <Text>{totalAppointments}</Text>
              </Card>

              {/* Card for completed appointments */}
              <Card className=" appointment-card"
              >
                <Text >Số đơn hoàn thành</Text>
                <Text>{completedAppointments}</Text>
              </Card>

              {/* Card for canceled appointments */}
              <Card className=" appointment-card">
                <Text>Số đơn bị hủy</Text>
                <Text>{canceledAppointments}</Text>
              </Card>
            </div>
            <Card
              style={{ width: '100%' }}
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
            >
              {contentList[activeTabKey1]}
            </Card>


          </div>
        </div>
        <div className="col-8">

          <div>
           
            
            
          </div>
        </div>




      </div>

    </div>
  );
};

export default EmployeeDetailPage;