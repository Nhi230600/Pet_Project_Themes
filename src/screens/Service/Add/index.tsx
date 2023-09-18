import React, { useState } from "react";
import { Form, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddServicePage.css";
import SelectField from "../../../components/SelectField";
import InputField from "../../../components/Form/InputField";
import TextAreaField from "../../../components/TextAreaField";
import NumberField from "../../../components/Form/NumberField";
import { ERROR_MESSAGES } from "../../../components/Form/formConstants"; // Import ERROR_MESSAGES từ formConstants

const AddServicePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

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
    <div>
      <Card title="Thêm dịch vụ" className="add-service-page">
        <Form form={form} name="addServiceForm" onFinish={onFinish}>
          <SelectField
            name="serviceType"
            label="Chọn loại dịch vụ"
            options={[
              { value: "Spa", label: "Spa" },
              { value: "Huấn luyện", label: "Huấn luyện" },
              {
                value: "Chăm sóc sức khỏe thú cưng",
                label: "Chăm sóc sức khỏe thú cưng",
              },
            ]}
            rules={[
              { required: true, message: ERROR_MESSAGES.positionRequired },
            ]} // Sử dụng thông báo lỗi từ ERROR_MESSAGES
            initialValue="Spa"
            onChange={(value) => {
              // Xử lý sự kiện onChange ở đây (nếu cần)
            }}
          />
          <InputField
            name="serviceName"
            label="Tên dịch vụ"
            rules={[{ required: true, message: ERROR_MESSAGES.nameRequired }]} // Sử dụng thông báo lỗi từ ERROR_MESSAGES
          />
          <TextAreaField
            name="description"
            label="Miêu tả"
            rules={[
              { required: true, message: ERROR_MESSAGES.descriptionRequired },
            ]} // Sử dụng thông báo lỗi từ ERROR_MESSAGES
          />
          <NumberField
            name="price"
            label="Giá"
            rules={[
              { required: true, message: ERROR_MESSAGES.priceRequired }, // Sử dụng thông báo lỗi từ ERROR_MESSAGES
              {
                type: "number",
                min: 0,
                message: ERROR_MESSAGES.priceNonNegative, // Sử dụng thông báo lỗi từ ERROR_MESSAGES
              },
            ]}
          />
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Thêm dịch vụ
            </Button>
          </Form.Item>
        </Form>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default AddServicePage;
