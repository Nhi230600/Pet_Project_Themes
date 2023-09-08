import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify

import "./AddServicePage.css"; // Import file CSS tùy chỉnh

const { Option } = Select;

const AddServicePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [serviceType, setServiceType] = useState("Spa");

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    navigate("/admin/service");
    toast.success("Thêm dịch vụ thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="add-service-page">
      <Form form={form} name="addServiceForm" onFinish={onFinish}>
        <Form.Item
          label="Chọn loại dịch vụ"
          name="serviceType"
          initialValue="Spa"
        >
          <Select onChange={(value) => setServiceType(value)}>
            <Option value="Spa">Spa</Option>
            <Option value="Huấn luyện">Huấn luyện</Option>
            <Option value="Chăm sóc sức khỏe thú cưng">Chăm sóc sức khỏe thú cưng</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Tên dịch vụ"
          name="serviceName"
          rules={[
            { required: true, message: "Vui lòng nhập tên dịch vụ" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Miêu tả"
          name="description"
          rules={[
            { required: true, message: "Vui lòng nhập miêu tả" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Giá"
          name="price"
          rules={[
            { required: true, message: "Vui lòng nhập giá" },
            
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm dịch vụ
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default AddServicePage;
