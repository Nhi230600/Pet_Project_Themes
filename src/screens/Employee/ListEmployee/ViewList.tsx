import {
  DeleteOutlined,
  InfoCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Form, Table, Tooltip } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "antd/dist/antd.css";
import { Employee } from "./Employee";
import "./ViewList.css";

const ViewList = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      name: "Nguyễn Văn A",
      type: "Nhân viên chăm sóc",
      account: "nvana",
      password: "password123",
    },
    {
      name: "Trần Thị B",
      type: "Bác sĩ",
      account: "ttb",
      password: "doctor456",
    },
    {
      name: "Lê Quang C",
      type: "Huấn luyện viên",
      account: "lqc",
      password: "trainer789",
    },
    {
      name: "Phạm Thị D",
      type: "Nhân viên chăm sóc",
      account: "ptd",
      password: "care123",
    },
    {
      name: "Hoàng Văn E",
      type: "Bác sĩ",
      account: "hve",
      password: "medic456",
    },
    {
      name: "Mai Thị F",
      type: "Nhân viên chăm sóc",
      account: "mtf",
      password: "care567",
    },
    {
      name: "Lý Thanh G",
      type: "Huấn luyện viên",
      account: "ltg",
      password: "trainer890",
    },
    {
      name: "Đinh Văn H",
      type: "Nhân viên chăm sóc",
      account: "dvh",
      password: "care246",
    },
    {
      name: "Vũ Thị I",
      type: "Bác sĩ",
      account: "vti",
      password: "medic789",
    },
    {
      name: "Trần Văn J",
      type: "Huấn luyện viên",
      account: "tvj",
      password: "trainer123",
    },
    {
      name: "Nguyễn Thị K",
      type: "Nhân viên chăm sóc",
      account: "ntk",
      password: "care789",
    },
    {
      name: "Lê Văn L",
      type: "Bác sĩ",
      account: "lvl",
      password: "medic246",
    },
    {
      name: "Trương Thị M",
      type: "Nhân viên chăm sóc",
      account: "ttm",
      password: "care135",
    },
    {
      name: "Phan Văn N",
      type: "Huấn luyện viên",
      account: "pvn",
      password: "trainer357",
    },
    {
      name: "Hồ Thị O",
      type: "Nhân viên chăm sóc",
      account: "hto",
      password: "care579",
    },
    {
      name: "Võ Văn P",
      type: "Bác sĩ",
      account: "vvp",
      password: "medic468",
    },
    {
      name: "Lê Thị Q",
      type: "Nhân viên chăm sóc",
      account: "ltq",
      password: "care124",
    },
    {
      name: "Trần Văn R",
      type: "Huấn luyện viên",
      account: "tvr",
      password: "trainer678",
    },
    {
      name: "Nguyễn Thị S",
      type: "Nhân viên chăm sóc",
      account: "nts",
      password: "care234",
    },
    {
      name: "Hoàng Văn T",
      type: "Bác sĩ",
      account: "hvt",
      password: "medic789",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddEmployee = () => {
    form
      .validateFields()
      .then((values: Employee) => {
        if (values.account.length < 6) {
          throw new Error("Tài khoản phải có ít nhất 6 ký tự.");
        }
        if (values.password.length < 8) {
          throw new Error("Mật khẩu phải có ít nhất 8 ký tự.");
        }
        setEmployees([...employees, values]);
        form.resetFields();
        setIsModalVisible(false);
      })
      .catch((errorInfo) => {
        console.error("Validation failed:", errorInfo.message);
      });
  };
  const handleViewEmployee = (record: Employee) => {
    // Chuyển hướng đến trang employeedetail và truyền thông tin chi tiết nhân viên
    navigate(`/employee/detail`, { state: { employee: record } });
  };
  const handleEditEmployee = (record: Employee) => {
    // Chuyển hướng đến trang employeeedit và cho phép chỉnh sửa nhân viên
    navigate(`/employee/edit`, { state: { employee: record } });
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
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Chức vụ",
      dataIndex: "type",
      key: "type",
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
    },
    {
      title: "Hành động",
      key: "action",
      render: (text: string, record: Employee) => (
        <span>
          <Tooltip title="Xem chi tiết">
            <Button
              type="primary"
              icon={<InfoCircleOutlined />}
              style={{ marginRight: 8 }}
              onClick={() => handleViewEmployee(record)}
            />
          </Tooltip>
          <Tooltip title="Tắt hoạt động">
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              style={{ marginRight: 8 }}
              onClick={() => handleDeleteEmployee(record)}
            />
          </Tooltip>
          <Tooltip title="Chỉnh sửa thông tin">
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => handleEditEmployee(record)}
            />
          </Tooltip>
        </span>
      ),
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedEmployees = employees.slice(startIndex, endIndex);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          alignItems: "center",
        }}
      >
        <div>
          <h1>DANH SÁCH NHÂN VIÊN</h1>
        </div>
        <div>
          <NavLink to="/employee/add">
            <button className="form-button styled">Thêm nhân viên</button>
          </NavLink>
        </div>
      </div>

      <Table
        style={{
          border: "0.1vw solid black",
          borderRadius: "0.5vw",
          padding: "1rem",
        }}
        dataSource={displayedEmployees}
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
  );
};

export default ViewList;
