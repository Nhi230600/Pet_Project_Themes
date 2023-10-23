import { Button, Card, Form } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../../components/Form/InputField";
import InputFieldDatePicker from "../../../components/Form/InputFieldDatePicker";
import SelectField from "../../../components/Form/SelectField";
import { ERROR_MESSAGES } from "../../../components/Form/formConstants";
import "./AddShiftPage.css";

const AddShiftPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    toast.success("Lưu Ca làm thành công");
    navigate("/employee/detail");
  };

  return (
    <div>
      <Card className="shift-card" title="Tạo Ca làm Mới">
        <div className="add-shift-page">
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
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

            <InputFieldDatePicker
              name="timeRange"
              label="Thời gian"
              rules={[
                { required: true, message: ERROR_MESSAGES.timeRangeRequired },
              ]}
            />

            <SelectField
              name="shift"
              label="Ca làm"
              options={[
                { value: "morning", label: "Sáng" },
                { value: "afternoon", label: "Chiều" },
              ]}
              rules={[{ required: true, message: "Vui lòng chọn ca làm" }]}
              useRadio={true}
            />

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="add-shift-button"
              >
                Lưu Ca làm
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default AddShiftPage;
