import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputComponent, Service, serviceData } from "components";
import "./AddServicePage.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddServicePage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [service, setService] = useState<Service>({
    description: "",
    id: 0,
    name: "",
    price: 0,
    type: "Spa",
  });
  const onChangeType = (newValue: string) => {
    setService((prevService) => ({
      ...prevService,
      type: newValue,
    }));
  };
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
      serviceData.push(service);
      toast.success("Thêm thành công");
      navigate("/admin/service");
    }
  };
  const select = [
    {
      value: "Huấn luyện",
      description: "Huấn luyện",
    },
    {
      value: "Spa",
      description: "Spa",
    },
    {
      value: "Chăm sóc sức khỏe thú cưng",
      description: "Chăm sóc sức khỏe thú cưng",
    },
  ];
  const inputFields = [
    {
      content: "Dịch vụ",
      description: service.type,
      select: select,
      type: "select",
      onChange: onChangeType,
    },
    {
      content: "Tên dịch vụ",
      description: service.name,
      onChange: onChangeName,
    },
    {
      content: "Mô tả",
      description: service.description,
      onChange: onChangeDescription,
    },
    {
      content: "Giá",
      description: service.price.toString(),
      onChange: onChangePrice,
    },
  ];

  return (
    <div>
      <Card title="Thêm dịch vụ" className="add-service-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((field, index) => (
            <InputComponent
              key={index}
              content={field.content}
              description={field.description}
              select={field.select}
              type={field.type}
              onChange={field.onChange}
            />
          ))}
          <Button block type="primary" htmlType="submit">
            Thêm mới
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddServicePage;
