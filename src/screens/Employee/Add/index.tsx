import React from "react";
import { Form, Input, Button, Select, InputNumber, Card } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

const AddEmployeePage = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <Card title="Thêm nhân viên" className="add-employee-card">
      <Form name="addEmployeeForm" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="position"
          label="Chức vụ"
          rules={[{ required: true, message: "Vui lòng chọn chức vụ!" }]}
        >
          <Select>
            <Option value="Spa">Spa</Option>
            <Option value="Huấn luyện viên">Huấn luyện viên</Option>
            <Option value="Bác sĩ">Bác sĩ</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="qualification"
          label="Bằng cấp"
          rules={[{ required: true, message: "Vui lòng nhập bằng cấp!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="experience"
          label="Kinh nghiệm (năm)"
          rules={[
            { required: true, message: "Vui lòng nhập kinh nghiệm!" },
            {
              type: "number",
              min: 0,
              message: "Kinh nghiệm phải là số không âm!",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm nhân viên
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddEmployeePage;
