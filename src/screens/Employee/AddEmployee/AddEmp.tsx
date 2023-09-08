import { Card, Form, Input, InputNumber, Select } from "antd";
import "./AddEmpl.css";

const { Option } = Select;

const Add = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };
  return (
    <Card
      title="THÊM NHÂN VIÊN"
      className="add-employee-card"
      style={{
        textAlign: "center",
        borderRadius: "0.5vw",
        border: "0.1vw solid black",
      }}
    >
      <Form
        name="addEmployeeForm"
        onFinish={onFinish}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 15,
        }}
      >
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
            <Option value="Spa">Nhân viên SPA</Option>
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
        <Form.Item
          wrapperCol={{
            span: 30,
          }}
        >
          <button type="submit" className="form-button styled">
            Thêm nhân viên
          </button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Add;
