import TableList from "components/ListField";
import { useState } from "react";
import { toast } from "react-toastify";
import { CustomerData, Customer } from "components";

const Index = () => {
  const fields = ["Name", "Phone", "Create At", "Appointment"];
  const title = "Danh sách người dùng";

  const tableData = CustomerData;
  const handleDelete = (id: any) => {
    const updatedData = tableData.filter((row) => row.id !== id);

    toast.success("Xóa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleViewDetail = (rowData: any) => {};

  return (
    <div className="py-20">
      <TableList
        fields={fields}
        rows={fields}
        tableData={tableData}
        onDelete={handleDelete}
        onViewDetail={handleViewDetail}
        title={title}
      />
    </div>
  );
};

export default Index;
