import { Button, Input, Space, Table, Tag, Tooltip, Typography } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ListEmployeeAdmin.css";
import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { EmployeeData } from "components";
import Employee from "components/EmployeeConstant/Type";
const EmployeeListPage = () => {
  const [employees, setEmployees] = useState(EmployeeData);
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
      dataIndex: "avatar",
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
      dataIndex: "position",
      key: "position",
      render: (type: string) => (
        <Tag className="style-detail-position">{type}</Tag>
      ),
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
      render: (type: string) => (
        <Tag className="style-detail-password">{type}</Tag>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (text: string, record: Employee) => (
        <Space className="info-buttons-space">
          <Tooltip title="Xem chi tiết">
            <Link to={`${record.id}`}>
              <Button
                className="info-button-employee"
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
      return employee.name.toLowerCase().includes(searchText.toLowerCase());
    })
    .slice(startIndex, endIndex);

  return (
    <div className="list-employee-admin">
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
      <div className="button-container-employee">
        <Button className="add-button-employee" onClick={showModal}>
          <PlusCircleOutlined /> Thêm nhân viên
        </Button>
      </div>
      <div className="ant-table-thead">
        <Table
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
