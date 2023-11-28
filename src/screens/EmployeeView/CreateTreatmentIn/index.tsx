import { Form, Button } from "antd";
import { InputComponent, Pet } from "components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Treatment from "../CustomerProfile/interface/Treatment";
import treatmentData from "../CustomerProfile/interface/data";
import "./CreateTreatmentIn.css";

function CreateTreatmentIn() {
  const navigate = useNavigate();
  const { idPet } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [employeeName, setEmployeeName] = useState("");
  const [start, setStart] = useState("");
  const [service, setService] = useState("");
  const [treatmentContent, setTreatmentContent] = useState("");

  useEffect(() => {
    setStart(new Date().toISOString().split("T")[0]);
  }, []);

  const onFinish = async () => {
    if (start !== "" && service !== "" && treatmentContent !== "") {
      const lastTreatment = treatmentData[treatmentData.length - 1];
      const lastTreatmentId = lastTreatment ? lastTreatment.id : 0;
      const newTreatmentId = lastTreatmentId + 1;
      const newTreatment: Treatment = {
        id: newTreatmentId,
        idPet: Number(idPet),
        employeeName: "Nguyễn Văn A",
        start: start,
        services: [
          {
            name: "Checkup",
            price: 10,
          },
          {
            name: "Vaccination",
            price: 20,
          },
        ],
        petName: "Pet 1",
        treatmentContent: treatmentContent,
      };

      treatmentData.push(newTreatment);
      toast.success("Tạo thành công");
      navigate(`/employee`);
    } else {
      toast.error("Chưa điền hết kìa má!");
    }
  };

  const writereBook = () => {
    navigate(`/employee/${idPet}/rebook`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeEmployeeName = (newEmployeeName: string) => {
    setEmployeeName(newEmployeeName);
  };

  const onChangeDate = (newDate: string) => {
    setStart(newDate);
  };

  const onChangeService = (newService: string) => {
    setService(newService);
  };

  const onChangeTreatmentContent = (newContent: string) => {
    setTreatmentContent(newContent);
  };

  return (
    <div className="profile-page">
      <h2>Thêm thời gian điều trị</h2>
      <Form
        name="customerForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <div className="profile-details">
          <InputComponent
            content="Ngày khám"
            type="pickdate"
            description={start}
            onChange={onChangeDate}
          />
          <InputComponent
            content="Tên dịch vụ"
            description={service}
            onChange={onChangeService}
          />
        </div>
        <div className="input-form">
          <h3>Nội dung điều trị</h3>
          <InputComponent
            content="Nội dung điều trị"
            description={treatmentContent}
            onChange={onChangeTreatmentContent}
          />
        </div>
        <div className="action-buttons">
          <Button type="primary" htmlType="submit">
            Xong
          </Button>
          <Button type="primary" onClick={writereBook}>
            Đặt hẹn sau
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateTreatmentIn;
