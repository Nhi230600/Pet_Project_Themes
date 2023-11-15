import { CustomerData, Pet, petData } from "components";
import TableList from "components/ListField";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Index = () => {
  const navigate = useNavigate();
  const { CustomerId } = useParams();
  const fields = ["Tên pet", "Tuổi", "Nguồn gốc"];
  const rows = ["name", "age", "breed"];
  const title = "Danh sách thú cưng";
  const [petList, setPetList] = useState<Pet[]>([]);

  useEffect(() => {
    if (CustomerId) {
      const filteredPet = petData.filter(
        (appointment) => appointment.idCustomer.toString() === CustomerId,
      );
      setPetList(filteredPet);
    } else {
      toast.error("Không tìm thấy khách hàng");
    }
  }, []);
  const handleDelete = (id: any) => {
    const indexToRemove = petData.findIndex((pet) => pet.id === id);
    if (indexToRemove !== -1) {
      petData.splice(indexToRemove, 1);
    }
    const updatedPetList = petList.filter((pet) => pet.id !== id);
    setPetList(updatedPetList);
    toast.success("Xóa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };
  const addCustomer = () => {
    navigate(`/admin/customer/${CustomerId}/pet/add`);
  };

  return (
    <div className="py-20">
      <TableList
        fields={fields}
        rows={rows}
        tableData={petList}
        onDelete={handleDelete}
        title={title}
        addAction={addCustomer}
      />
    </div>
  );
};

export default Index;
