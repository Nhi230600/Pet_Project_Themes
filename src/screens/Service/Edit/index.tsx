import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Input, Button, Spin } from "antd";
import { toast, ToastContainer } from "react-toastify";

import "antd/dist/antd.css";
import "./EditServicePage.css";

const EditServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Mô phỏng dữ liệu thông tin dịch vụ dựa trên serviceId và điền vào form
    const mockServiceData = {
      name: "Dịch vụ mô phỏng",
      description: "Mô phỏng dịch vụ cho ví dụ này.",
      price: 50,
    };
    form.setFieldsValue(mockServiceData);
  }, [form, serviceId]);

  const onFinish = (values: any) => {
    setLoading(true);

    // Mô phỏng việc gửi dữ liệu cập nhật lên server
    setTimeout(() => {
      toast.success("Sửa thông tin thành công", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate("/admin/service");
      setLoading(false);
    }, 2000); // Giả lập việc cập nhật mất 2 giây
  };

  return (
    <div className="edit-service-page">
      <h2>Chỉnh sửa thông tin dịch vụ</h2>
      <Spin spinning={loading}>
        <Form
          form={form}
          name="edit-service-form"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item
            label="Tên dịch vụ"
            name="name"
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
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[
              { required: true, message: "Vui lòng nhập giá" },
              { type: "number", min: 0, message: "Giá phải là số không âm" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Spin>
      <ToastContainer />
    </div>
  );
};

export default EditServicePage;
