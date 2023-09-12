import { Form, Input, Button, Select, InputNumber, Upload, Card } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons"; // Import biểu tượng UploadOutlined
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditEmp.css";
import { FONTSIZE } from "../../../constants";

const { Option } = Select;

const EditEmp = () => {
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
    // Xử lý logic cập nhật thông tin nhân viên ở đây
    console.log("Updated employee:", values);

    // Sau khi cập nhật thành công, chuyển hướng đến trang chi tiết nhân viên
    toast.success("Sửa thành công", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
    navigate("/employee/detail");
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          textShadow: "0.1rem 0.1rem 0.1rem rgb(245, 214, 129)",
        }}
      >
        CHỈNH SỬA THÔNG TIN NHÂN VIÊN
      </h1>
      <ToastContainer />
      <Card>
        <Form
          form={form}
          name="editEmployeeForm"
          onFinish={onFinish}
          initialValues={exampleEmployee}
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 20,
          }}
        >
          <Form.Item
            name="avatar"
            label="Avatar"
            valuePropName="fileList" // Sử dụng fileList để quản lý danh sách tệp
            getValueFromEvent={(e) => e.fileList}
            // Không cần quy tắc kiểm tra ở đây vì chúng ta sẽ tự xử lý
          >
            <Upload
              beforeUpload={() => false} // Ngăn việc tải lên ngay lập tức
              showUploadList={false} // Ẩn danh sách tải lên mặc định
            >
              {exampleEmployee.avatar ? (
                <img
                  src={exampleEmployee.avatar}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
              ) : (
                <div>
                  <Button icon={<UploadOutlined />}>Upload</Button>
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
          <Form.Item
            wrapperCol={{
              span: 30,
            }}
          >
            <button
              type="submit"
              className="form-button styled"
              style={{ fontSize: FONTSIZE.text }}
            >
              Lưu
            </button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default EditEmp;
