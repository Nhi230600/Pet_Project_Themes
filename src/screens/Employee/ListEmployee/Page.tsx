import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Tooltip,
  Card,
  Typography,
  Space,
  Tag,
} from "antd";
import {
  InfoCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./ListEmployee.css";

import "antd/dist/antd.css";
import { Employee } from "./Employee";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      name: "Nguyễn Văn A",
      type: "Nhân viên chăm sóc",
      account: "nvana",
      password: "password123",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Trần Thị B",
      type: "Bác sĩ",
      account: "ttb",
      password: "doctor456",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Lê Quang C",
      type: "Huấn luyện viên",
      account: "lqc",
      password: "trainer789",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Phạm Thị D",
      type: "Nhân viên chăm sóc",
      account: "ptd",
      password: "care123",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Hoàng Văn E",
      type: "Bác sĩ",
      account: "hve",
      password: "medic456",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Mai Thị F",
      type: "Nhân viên chăm sóc",
      account: "mtf",
      password: "care567",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Lý Thanh G",
      type: "Huấn luyện viên",
      account: "ltg",
      password: "trainer890",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Đinh Văn H",
      type: "Nhân viên chăm sóc",
      account: "dvh",
      password: "care246",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Vũ Thị I",
      type: "Bác sĩ",
      account: "vti",
      password: "medic789",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Trần Văn J",
      type: "Huấn luyện viên",
      account: "tvj",
      password: "trainer123",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Nguyễn Thị K",
      type: "Nhân viên chăm sóc",
      account: "ntk",
      password: "care789",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Lê Văn L",
      type: "Bác sĩ",
      account: "lvl",
      password: "medic246",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Trương Thị M",
      type: "Nhân viên chăm sóc",
      account: "ttm",
      password: "care135",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
    {
      name: "Phan Văn N",
      type: "Huấn luyện viên",
      account: "pvn",
      password: "trainer357",
      avatar:
        "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/366932763_3665015117155608_5881902676761915179_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Ex7zO_okcJsAX8JxOKk&_nc_ht=scontent.fdad2-1.fna&oh=00_AfACoJjz-hlvxaWP_-mJtiZDhvwXADQhA4Zf2Y3O2atgGg&oe=65045391",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();
  const showModal = () => {
    navigate("/employee/add");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleViewEmployee = (record: Employee) => {
    // Chuyển hướng đến trang employeedetail và truyền thông tin chi tiết nhân viên
    navigate(`/employee/detail`, { state: { employee: record } });
  };

  const handleDeleteEmployee = (record: Employee) => {
    const updatedEmployees = employees.filter(
      (employee) => employee !== record
    );
    setEmployees(updatedEmployees);
    toast.success("Xóa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "avatar", // Thêm một trường avatar trong mảng Employee và cung cấp đường dẫn đến ảnh avatar.
      key: "avatar",
      render: (avatar: string) => (
        <div className="avatar">
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>
      ),
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Chức vụ",
      dataIndex: "type",
      key: "type",
      render: (type: string) => <Tag color="green">{type}</Tag>,
    },
    {
      title: "Tài khoản",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
      render: (type: string) => <Tag color="red">{type}</Tag>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (text: string, record: Employee) => (
        <Space className="action-buttons">
          <Tooltip title="Xem chi tiết">
            <Button
              type="primary"
              shape="circle"
              icon={<InfoCircleOutlined />}
              onClick={() => handleViewEmployee(record)}
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              type="default"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteEmployee(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedEmployees = employees.slice(startIndex, endIndex);

  return (
    <div className="list-container">
      <Typography.Title level={2} className="list-title">
        Danh sách nhân viên
      </Typography.Title>

      <div>
        <Button className="addButton" type="primary" onClick={showModal}>
          <PlusCircleOutlined /> Thêm nhân viên
        </Button>
      </div>
      <div>
        <Table
          className="ant-table-thead"
          dataSource={displayedEmployees}
          bordered={true}
          columns={columns}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: employees.length,
            onChange: handlePageChange,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20"],
          }}
        />
      </div>
    </div>
  );
};
export default EmployeeListPage;
