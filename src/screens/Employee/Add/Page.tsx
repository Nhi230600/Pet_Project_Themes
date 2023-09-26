import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Upload } from "antd";
import "antd/dist/antd.css";
import InputField from "components/Form/InputField";
import NumberField from "components/Form/NumberField";
import SelectField from "components/Form/SelectField";
import { ERROR_MESSAGES } from "components/Form/formConstants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddEmployeePage.css";

const options = [
  { value: "Spa", label: "Spa" },
  { value: "Huấn luyện viên", label: "Huấn luyện viên" },
  { value: "Bác sĩ", label: "Bác sĩ" },
];

const AddEmployeePage = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    toast.success("Thêm nhân viên thành công");
    navigate("/admin/employee");
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const checkFile = (file: any) => {
    if (fileList.length >= 1) {
      return false;
    }
    return true;
  };

  return (
    <Card className="add-employee-card" title="Thêm nhân viên">
      <Form name="addEmployeeForm" onFinish={onFinish} form={form}>
        <Form.Item
          label="Tải Ảnh"
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
            onRemove={() => setFileList([])}
          >
            {fileList.length >= 1 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <InputField
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: ERROR_MESSAGES.nameRequired }]}
        />

        <SelectField
          name="position"
          label="Chức vụ"
          options={options}
          rules={[{ required: true, message: ERROR_MESSAGES.positionRequired }]}
        />

        <InputField
          name="qualification"
          label="Bằng cấp"
          rules={[
            { required: true, message: ERROR_MESSAGES.qualificationRequired },
          ]}
        />

        <NumberField
          name="experience"
          label="Kinh nghiệm (năm)"
          rules={[
            { required: true, message: ERROR_MESSAGES.experienceRequired },
            {
              type: "number",
              min: 0,
              message: ERROR_MESSAGES.experienceNonNegative,
            },
          ]}
        />

        <Form.Item>
          <Button className="add-Button" block type="primary" htmlType="submit">
            Thêm nhân viên
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddEmployeePage;
