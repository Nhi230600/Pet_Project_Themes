import { Pagination, Select } from "antd";
import employeeData from "components/EmployeeConstant";
import Nav from "components/Nav";
import { useState } from "react";
import "./ListEmployee.css";
import { useNavigate } from "react-router-dom";

const CustomerPick = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedType, setSelectedType] = useState<string>(""); // State để lưu loại nhân viên được chọn
  const employeesPerPage = 3;
  const navigate = useNavigate();

  const handleClick = (value: number) => {
    navigate(`/timetable/${value}`);
  };
  const handlePageChange = (page: any) => {
    setPageNumber(page);
  };
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setPageNumber(1);
  };

  const indexOfLastEmployee = pageNumber * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

  // Lọc danh sách nhân viên
  const filteredEmployees = selectedType
    ? employeeData.filter((item) => item.type === selectedType)
    : employeeData;

  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="select-wrapper-booking">
          <Select
            className="select-content"
            onSelect={handleTypeChange}
            options={[
              {
                value: "",
                label: "Tất cả",
              },
              {
                value: "trainer",
                label: "Huấn luyện viên",
              },
              {
                value: "spa",
                label: "Chăm sóc thú cưng",
              },
              {
                value: "care",
                label: "Khám bệnh",
              },
            ]}
          />
        </div>

        {currentEmployees.map((item) => (
          <div className="employee-booking" key={item.id}>
            <div className="title">{item.name}</div>
            <div className="text">
              <div className="code"> {item.position}</div>
              <div className="description">{item.description}</div>
              <div className="review">
                <span className="star-reviews">{`${item.appointment} đơn đã đặt`}</span>
              </div>
              <div className="button-booking-actions">
                <button onClick={() => handleClick(item.id)}>Chọn</button>
              </div>
            </div>
            <div className="avatar-booking">
              <div className="content-avatar-booking">
                <img src={item.avatar} alt="Avatar" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination
          current={pageNumber}
          total={filteredEmployees.length}
          pageSize={employeesPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CustomerPick;
