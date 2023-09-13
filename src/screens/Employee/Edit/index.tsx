import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Upload, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusOutlined } from "@ant-design/icons";
import "./EditEmployeePage.css";
import InputField from "../../../components/InputField"; // Import InputField component
import SelectField from "../../../components/SelectField"; // Import SelectField component
import NumberField from "../../../components/NumberField"; // Import NumberField component

const EditEmployeePage = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Giả sử có một đối tượng nhân viên mẫu để chỉnh sửa
  const exampleEmployee = {
    name: "Nguyễn Văn A",
    type: "Bác sĩ",
    account: "nvana",
    password: "password123",
    qualification: "Bác sĩ chuyên khoa nội",
    experience: 5,
    avatar: "",
  };

  const onFinish = (values: any) => {
    toast.success("Sửa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
    navigate("/employee/detail");
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
    <div>
      <ToastContainer />
      <Card
        title="Chỉnh sửa thông tin nhân viên"
        className="edit-employee-card"
      >
        <Form
          form={form}
          name="editEmployeeForm"
          onFinish={onFinish}
          initialValues={exampleEmployee}
        >
          <Form.Item
            label="Tải ảnh"
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

          {/* Sử dụng InputField */}
          <InputField
            name="name"
            label="Họ và tên"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          />

          {/* Sử dụng SelectField */}
          <SelectField
            name="type"
            label="Chức vụ"
            options={[
              { value: "Spa", label: "Spa" },
              { value: "Huấn luyện viên", label: "Huấn luyện viên" },
              { value: "Bác sĩ", label: "Bác sĩ" },
            ]}
            rules={[{ required: true, message: "Vui lòng chọn chức vụ!" }]}
          />

          {/* Sử dụng InputField */}
          <InputField
            name="account"
            label="Tài khoản"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          />

          {/* Sử dụng InputField với kiểu Password */}
          <InputField
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          />

          {/* Sử dụng InputField */}
          <InputField
            name="qualification"
            label="Bằng cấp"
            rules={[{ required: true, message: "Vui lòng nhập bằng cấp!" }]}
          />

          {/* Sử dụng NumberField */}
          <NumberField
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
          />

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EditEmployeePage;
