import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./AddEmployeePage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Option } = Select;

const AddEmployeePage = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    toast.success("Thêm nhân viên thành công");
    navigate("/employee");
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const checkFile = (file: any) => {
    if (fileList.length >= 1) {
      // Đã có tệp được tải lên, không cho phép tải lên thêm
      return false;
    }
    return true;
  };

  return (
    <Card title="Thêm nhân viên" className="add-employee-card">
      <Form name="addEmployeeForm" onFinish={onFinish} form={form}>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name="upload"
          rules={[
            {
              validator: (_, value) => {
                if (value && value.length > 1) {
                  return Promise.reject(new Error("Chỉ được tải lên 1 ảnh"));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Upload
            action="/upload.do"
            listType="picture-card"
            fileList={fileList}
            beforeUpload={checkFile}
            onRemove={() => setFileList([])} // Xóa tệp khi bấm nút xóa
          >
            {fileList.length >= 1 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
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
