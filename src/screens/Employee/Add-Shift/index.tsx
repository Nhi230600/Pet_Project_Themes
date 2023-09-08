// AddShiftPage.js
import React, { useState } from "react";
import { Card, Typography, Form, Input, Button, DatePicker, Radio } from "antd";
import "antd/dist/antd.css";
import "./AddShiftPage.css"; // Đảm bảo bạn đã kết nối CSS tại đây
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { Text } = Typography;
const { RangePicker } = DatePicker;

const AddShiftPage = () => {
  const [form] = Form.useForm();
  const [shiftTime, setShiftTime] = useState("morning");
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    toast.success("Thêm ca làm thành công");
    navigate("/employee/detail");
  };
  const handleAddShift = () => {
    
  };
  return (
    <div className="add-shift-page">
      <h1>Thêm Ca làm</h1>
      <Card className="shift-card">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item
            label="Nhân viên"
            name="employee"
            initialValue="Nguyễn Văn A"
            className="form-item"
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Chức vụ"
            name="type"
            initialValue="Bác sĩ"
            className="form-item"
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Thời gian"
            name="timeRange"
            className="form-item"
            rules={[
              { required: true, message: "Vui lòng chọn thời gian" },
            ]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item
            label="Ca làm"
            name="shift"
            className="form-item"
            rules={[
              { required: true, message: "Vui lòng chọn ca làm" },
            ]}
          >
            <Radio.Group onChange={(e) => setShiftTime(e.target.value)} value={shiftTime}>
              <Radio value="morning">Sáng</Radio>
              <Radio value="afternoon">Chiều</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              onClick={handleAddShift} // Thêm sự kiện onClick và gọi hàm handleAddShift khi nút được nhấn
            >
              Thêm ca làm
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddShiftPage;
