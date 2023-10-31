import { Button, Card, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../../../components/Form/InputField";
import NumberField from "../../../components/Form/NumberField";
import SelectField from "../../../components/Form/SelectField";
import { ERROR_MESSAGES } from "../../../components/Form/formConstants";
import TextAreaField from "../../../components/TextAreaField";
import "./AddServicePage.css";

const AddServicePage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    navigate("/admin/service");
    toast.success("Thêm dịch vụ thành công! 😊", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div>
      <Card title="Thêm dịch vụ" className="add-service-page">
        <Form form={form} name="addServiceForm" onFinish={onFinish}>
          <SelectField
            name="serviceType"
            label="Chọn loại dịch vụ"
            options={[
              { value: "Spa", label: "Spa" },
              { value: "Huấn luyện", label: "Huấn luyện" },
              {
                value: "Chăm sóc sức khỏe thú cưng",
                label: "Chăm sóc sức khỏe thú cưng",
              },
            ]}
            rules={[
              { required: true, message: ERROR_MESSAGES.positionRequired },
            ]}
            initialValue="Spa"
            onChange={(value) => {}}
          />
          <InputField
            name="serviceName"
            label="Tên dịch vụ"
            rules={[{ required: true, message: ERROR_MESSAGES.nameRequired }]}
          />
          <TextAreaField
            name="description"
            label="Miêu tả"
            rules={[
              { required: true, message: ERROR_MESSAGES.descriptionRequired },
            ]}
          />
          <NumberField
            name="price"
            label="Giá"
            rules={[
              { required: true, message: ERROR_MESSAGES.priceRequired },
              {
                type: "number",
                min: 0,
                message: ERROR_MESSAGES.priceNonNegative,
              },
            ]}
          />
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Thêm dịch vụ
            </Button>
          </Form.Item>
        </Form>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default AddServicePage;
