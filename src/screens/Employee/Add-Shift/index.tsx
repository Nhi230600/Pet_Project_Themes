import React, { useState } from "react";
import { Card, Typography, Form, Button, DatePicker, Radio } from "antd";
import "antd/dist/antd.css";
import "./AddShiftPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../components/InputField"; 
import SelectField from "../../../components/SelectField";
import InputFieldDatePicker  from "../../../components/InputFieldDatePicker";
import { ERROR_MESSAGES } from "../../../components/formConstants"; 



const AddShiftPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    toast.success("Thêm ca làm thành công");
    navigate("/employee/detail");
  };

  const handleAddShift = () => {
    // Your logic here
  };

  return (
    <div className="add-shift-page">
      <Card className="shift-card" title="Thêm Ca làm">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          {/* Employee Field */}
          <InputField
            name="employee"
            label="Nhân viên"
            initialValue="Nguyễn Văn A"
            disabled={true}
            rules={[]} // 
          />

          <InputField
            name="type"
            label="Chức vụ"
            initialValue="Bác sĩ"
            disabled={true}
            rules={[]}
          />


          {/* TimeRange Field */}
          <InputFieldDatePicker
            name="timeRange"
            label="Thời gian"
            rules={[
              { required: true, message: ERROR_MESSAGES.timeRangeRequired },
            ]}
           // Specify that you want to use RangePicker
          />


          <SelectField
            name="shift"
            label="Ca làm"
            options={[
              { value: "morning", label: "Sáng" },
              { value: "afternoon", label: "Chiều" },
            ]}
            rules={[
              { required: true, message: "Please select a shift" },
            ]}
            useRadio={true} // Enable radio buttons
          />


          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="button"
              onClick={handleAddShift}
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
