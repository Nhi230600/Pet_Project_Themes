import { Button, Card } from "antd";
import "antd/dist/antd.css";
import { InputComponent, Service, serviceData } from "components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./EditServicePage.css";
import { to } from "react-spring";

const EditServicePage = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState<Service>({
    description: "",
    id: 0,
    name: "",
    price: 0,
    type: "",
  });

  useEffect(() => {
    if (id) {
      const mockServiceData = serviceData.find((p) => p.id === parseInt(id));
      if (mockServiceData) {
        setService(mockServiceData);
      }
    }
  }, []);

  const onChangeName = (newValue: string) => {
    setService((prevService) => ({
      ...prevService,
      name: newValue,
    }));
  };
  const onChangeDescription = (newValue: string) => {
    setService((prevService) => ({
      ...prevService,
      description: newValue,
    }));
  };
  const onChangePrice = (newValue: number | string) => {
    if (typeof newValue === "number") {
      setService((prevService) => ({
        ...prevService,
        exp: newValue,
      }));
    } else if (typeof newValue === "string") {
      const parsedValue = parseFloat(newValue);
      if (!isNaN(parsedValue)) {
        setService((prevService) => ({
          ...prevService,
          price: parsedValue,
        }));
      }
    }
  };
  const onSubmit = () => {
    if (service.name === "") {
      toast.error("Không để trống tên");
    } else if (service.price < 0) {
      toast.error("Giá không được để âm");
    } else if (service.description === "") {
      toast.error("Không để trống mô tả");
    } else {
      const updatedServiceIndex = serviceData.findIndex(
        (service) => service.id.toString() === id,
      );
      if (updatedServiceIndex !== -1) {
        serviceData[updatedServiceIndex] = service;
      }
      toast.success("Cập nhật thành công");
      navigate("/admin/service");
    }
  };

  return (
    <div>
      <Card title="Chỉnh sửa thông tin dịch vụ" className="edit-service-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            content="Tên dịch vụ"
            description={service.name}
            onChange={onChangeName}
          />
          <InputComponent
            content="Mô tả"
            description={service.description}
            onChange={onChangeDescription}
          />
          <InputComponent
            onChange={onChangePrice}
            content="Giá"
            description={service.price.toString()}
          />
          <Button block type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </form>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default EditServicePage;
