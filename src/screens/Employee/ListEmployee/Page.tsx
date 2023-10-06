import { Button, Input, Space, Table, Tag, Tooltip, Typography } from "antd";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ListEmployee.css";

import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Employee } from "./Employee";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Nguyễn Văn A",
      type: "Nhân viên chăm sóc",
      account: "nvana",
      password: "password123",
      avatar: "https://picsum.photos/id/267/500/300",
    },
    {
      id: 2,
      name: "Trần Thị B",
      type: "Bác sĩ",
      account: "ttb",
      password: "doctor456",
      avatar: "https://picsum.photos/id/238/400/400",
    },
    {
      id: 3,
      name: "Lê Quang C",
      type: "Huấn luyện viên",
      account: "lqc",
      password: "trainer789",
      avatar: "https://picsum.photos/id/235/240/500",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      type: "Nhân viên chăm sóc",
      account: "ptd",
      password: "care123",
      avatar: "https://picsum.photos/id/250/740/600",
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      type: "Bác sĩ",
      account: "hve",
      password: "medic456",
      avatar: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 6,
      name: "Mai Thị F",
      type: "Nhân viên chăm sóc",
      account: "mtf",
      password: "care567",
      avatar: "https://picsum.photos/id/300/200/300",
    },
    {
      id: 7,
      name: "Lý Thanh G",
      type: "Huấn luyện viên",
      account: "ltg",
      password: "trainer890",
      avatar: "https://picsum.photos/id/289/200/500",
    },
    {
      id: 8,
      name: "Đinh Văn H",
      type: "Nhân viên chăm sóc",
      account: "dvh",
      password: "care246",
      avatar: "https://picsum.photos/id/600/200/300",
    },
    {
      id: 9,
      name: "Vũ Thị I",
      type: "Bác sĩ",
      account: "vti",
      password: "medic789",
      avatar: "https://picsum.photos/id/123/200/300",
    },
    {
      id: 10,
      name: "Trần Văn J",
      type: "Huấn luyện viên",
      account: "tvj",
      password: "trainer123",
      avatar: "https://picsum.photos/id/107/200/300",
    },
    {
      id: 11,
      name: "Nguyễn Thị K",
      type: "Nhân viên chăm sóc",
      account: "ntk",
      password: "care789",
      avatar: "https://picsum.photos/id/209/200/300",
    },
    {
      id: 12,
      name: "Lê Văn L",
      type: "Bác sĩ",
      account: "lvl",
      password: "medic246",
      avatar: "https://picsum.photos/id/237/200/300",
    },
    {
      id: 13,
      name: "Trương Thị M",
      type: "Nhân viên chăm sóc",
      account: "ttm",
      password: "care135",
      avatar: "https://picsum.photos/id/254/200/300",
    },
    {
      id: 14,
      name: "Phan Văn N",
      type: "Huấn luyện viên",
      account: "pvn",
      password: "trainer357",
      avatar: "https://picsum.photos/id/287/200/300",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();
  const showModal = () => {
    navigate("/admin/employee/add");
  };
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value: any) => {
    setSearchText(value);
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
        <div className="avatar-add-employee">
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
      render: (text: string) => <span className="style-bold-name">{text}</span>,
    },

    {
      title: "Chức vụ",
      dataIndex: "type",
      key: "type",
      render: (type: string) => <Tag className="style">{type}</Tag>,
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
      render: (type: string) => <Tag className="style2">{type}</Tag>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (text: string, record: Employee) => (
        <Space className="info-buttons-space">
          <Tooltip title="Xem chi tiết">
            <Link to={`${record.id}`}>
              <Button
                className="info-button"
                type="primary"
                shape="circle"
                icon={<InfoCircleOutlined />}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              className="delete-button"
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
  const displayedEmployees = employees
    .filter((employee) => {
      // Áp dụng logic tìm kiếm ở đây, ví dụ: tìm theo tên nhân viên
      return employee.name.toLowerCase().includes(searchText.toLowerCase());
    })
    .slice(startIndex, endIndex);

  return (
    <div>
      <div className="list-container">
        <Typography.Title level={2} className="list-title">
          Danh sách nhân viên
        </Typography.Title>
      </div>
      <div className="search-container">
        <Input.Search
          className="search-input"
          placeholder="Tìm kiếm nhân viên"
          onSearch={handleSearch}
        />
      </div>
      <div className="button-container">
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
