import TableList from "components/ListField";
import { useState } from "react";
import { toast } from "react-toastify";

const Index = () => {
  const fields = ["Name", "Phone", "Create At", "Appointment"];
  const title = "Danh sách người dùng";

  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "1234568793",
      createat: "2023-09-19",
      appointment: "50",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "5154645646",
      createat: "2023-09-20",
      appointment: "100",
    },
  ]);
  const handleDelete = (id: any) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
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
        rows={[]}
      />
    </div>
  );
};

export default Index;
