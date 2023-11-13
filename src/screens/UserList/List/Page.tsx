import TableList from "components/ListField";
import { useState } from "react";
import { toast } from "react-toastify";
import { CustomerData, Customer } from "components";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const fields = ["Tên", "Tài khoản", "Mật khẩu", "Số buổi hẹn"];
  const rows = ["name", "account", "password", "appointments"];
  const title = "Danh sách người dùng";

  const tableData = CustomerData;
  const handleDelete = (id: any) => {
    const indexToRemove = CustomerData.findIndex(
      (customer) => customer.id === id,
    );
    if (indexToRemove !== -1) {
      CustomerData.splice(indexToRemove, 1);
    }
    toast.success("Xóa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  const addCustomer = () => {
    navigate("/admin/customer/add");
  };

  return (
    <div className="py-20">
      <TableList
        fields={fields}
        rows={rows}
        tableData={tableData}
        onDelete={handleDelete}
        title={title}
        addAction={addCustomer}
      />
    </div>
  );
};

export default Index;
