import React, { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Upload, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons"; // Import biểu tượng UploadOutlined
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusOutlined } from "@ant-design/icons";
import "./EditEmployeePage.css";
const { Option } = Select;

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
            name="type"
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
            name="account"
            label="Tài khoản"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
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
