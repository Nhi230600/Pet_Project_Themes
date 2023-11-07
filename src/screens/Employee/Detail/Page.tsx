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
  YoutubeFilled
} from '@ant-design/icons';
import { Avatar, Button, Card, DatePicker, List, Modal, Pagination, Tag, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EmployeeDetailPage.css';
import ShiftsOfDay from './ShiftsOfDay';
import employeeData from 'components';
const { Text } = Typography;

const EmployeeDetailPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { id } = useParams();
  useEffect;
  const [employee] = useState({
    name: 'Nguyễn Văn A',
    type: 'Bác sĩ',
    account: 'nvana',
    password: 'password123',
    qualification: 'Bác sĩ chuyên khoa nội',
    experience: 5,
    avatarUrl: 'https://res.cloudinary.com/dinphlnz4/image/upload/v1694748159/Screenshot_2023-09-15_101848_ievcml.png',
    shifts: [
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-10', time: '08:00 - 12:00', status: 1 },
      { date: '2023-09-11', time: '13:00 - 17:00', status: 2 },
      { date: '2023-09-12', time: '09:00 - 11:00', status: 1 }
    ],
    appointments: [
      {
        date: '2023-09-10',
        time: '08:00 - 09:00',
        status: 1,
        service: 'Trị bệnh ngu',
        price: '10'
      },
      {
        date: '2023-09-11',
        time: '10:00 - 11:00',
        status: 2,
        service: 'Khai sáng tâm hồn',
        price: '290'
      },
      {
        date: '2023-09-12',
        time: '14:00 - 15:00',
        status: 3,
        service: 'Thông não',
        price: '150'
      },
      {
        date: '2023-09-10',
        time: '08:00 - 09:00',
        status: 1,
        service: 'Trị bệnh ngu',
        price: '10'
      },
      {
        date: '2023-09-10',
        time: '08:00 - 09:00',
        status: 1,
        service: 'Trị bệnh ngu',
        price: '100'
      },
      {
        date: '2023-09-12',
        time: '14:00 - 15:00',
        status: 3,
        service: 'Thông não',
        price: '200'
      }
    ]
  });
  const tabList = [
    {
      key: 'tab1',
      tab: 'Ca làm'
    },
    {
      key: 'tab2',
      tab: 'Buổi hẹn'
    }
  ];
  const pageSize = 3;
  const totalItems = employee.appointments.length;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const contentList: Record<string, React.ReactNode> = {
    tab1: (
      <Card title="Ca làm trong ngày " className="shift">
        <DatePicker
          onChange={date => {
            if (date) {
              const selectedDate = date.format('YYYY-MM-DD');
              setSelectedDate(selectedDate);
            } else {
              setSelectedDate(null);
            }
          }}
        />
        <ShiftsOfDay
          shifts={employee.shifts}
          onStatusChange={index => handleStatusChange(index)}
          selectedDate={selectedDate}
        />
        <Link to={`add-shift`}>
          <Button icon={<PlusOutlined />} className="add-shift-button">
            Thêm ca làm
          </Button>
        </Link>
      </Card>
    ),
    tab2: (
      <Card title="Thông tin buổi hẹn" className="shift">
        <div className="status-icon">
          <CalendarOutlined />
        </div>
        <List
          dataSource={employee.appointments.slice(startIndex, endIndex)}
          renderItem={appointment => (
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

              <div className="price-info">
                <DollarOutlined />
                <Text className="price-text">{appointment.price}</Text>
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
    )
  };
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  const totalAppointments = employee.appointments.length;

  // Tính toán số đơn hoàn thành
  const completedAppointments = employee.appointments.filter(appointment => appointment.status === 1).length;

  // Tính toán số đơn bị hủy
  const canceledAppointments = employee.appointments.filter(appointment => appointment.status === 2).length;
  const handleStatusChange = (index: number) => {
    const updatedShifts = [...employee.shifts];

    if (updatedShifts[index].status === 1) {
      Modal.confirm({
        title: 'Xác nhận',
        content: 'Bạn có chắc chắn muốn đánh dấu hoàn thành?',
        onOk() {
          toast.success('Cập nhật trạng thái thành công');
        },
        onCancel() {}
      });
    }
  };

  return (
    <div className="employee-detail-page">
      <h1>Chi tiết nhân viên</h1>

      <div className="block">
        <div className="block-1">
          <Card
            className="employee-card"
            actions={[
              <FacebookFilled style={{ color: 'blue' }} />,
              <TwitterOutlined style={{ color: 'skyblue' }} />,
              <InstagramOutlined style={{ color: 'skyblue' }} />,
              <YoutubeFilled style={{ color: 'red' }} />
            ]}
            cover={<div className="color-background"> {employee.name}</div>}
          >
            <Card.Meta
              className="avatar-profile-card"
              avatar={<Avatar size={150} src={employee.avatarUrl}></Avatar>}
            ></Card.Meta>

            <Text className="profile-text">
              <strong>Chức vụ:</strong> {employee.type}
            </Text>
            <br />
            <Text className="profile-text">
              <strong>Bằng cấp:</strong> {employee.qualification}
            </Text>
            <br />
            <Text className="profile-text">
              <strong>Kinh nghiệm:</strong> {employee.experience} năm
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
                  <Text className="appointment-card-number">{totalAppointments}</Text>
                </div>
              </div>
            </Card>

            <Card className="appointment-card completed-appointments">
              <div className="card-content-1">
                <CheckCircleOutlined className="icon-detail-employee" />
                <div className="appointment-card-in">
                  <Text>Đơn hoàn thành</Text>
                  <br />
                  <Text className="appointment-card-number">{completedAppointments}</Text>
                </div>
              </div>
            </Card>

            <Card className="appointment-card canceled-appointments">
              <div className="card-content-1">
                <CloseCircleOutlined className="icon-detail-employee" />
                <div className="appointment-card-in">
                  <Text>Số đơn bị hủy</Text>
                  <br />
                  <Text className="appointment-card-number">{canceledAppointments}</Text>
                </div>
              </div>
            </Card>
            <Card className="appointment-tab" tabList={tabList} activeTabKey={activeTabKey1} onTabChange={onTab1Change}>
              {contentList[activeTabKey1]}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailPage;
