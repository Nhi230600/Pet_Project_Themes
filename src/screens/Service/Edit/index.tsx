import { Button, Card, Form, Spin } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import InputField from "../../../components/Form/InputField";
import NumberField from "../../../components/Form/NumberField";
import { ERROR_MESSAGES } from "../../../components/Form/formConstants"; // Import ERROR_MESSAGES từ formConstants
import TextAreaField from "../../../components/TextAreaField";
import "./EditServicePage.css";

const EditServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mockServiceData = {
      name: "Dịch vụ mô phỏng",
      description: "Mô phỏng dịch vụ cho ví dụ này.",
      price: 50,
    };
    form.setFieldsValue(mockServiceData);
  }, [form, serviceId]);

  const onFinish = (values: any) => {
    setLoading(true);

    // Mô phỏng việc gửi dữ liệu cập nhật lên server
    setTimeout(() => {
      toast.success("Sửa thông tin thành công", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate("/admin/service");
      setLoading(false);
    }, 2000); // Giả lập việc cập nhật mất 2 giây
  };

  return (
    <div>
      <Card title="Chỉnh sửa thông tin dịch vụ" className="edit-service-page">
        <Spin spinning={loading}>
          <Form
            form={form}
            name="edit-service-form"
            onFinish={onFinish}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
          >
            <InputField
              name="name"
              label="Tên dịch vụ"
              rules={[{ required: true, message: ERROR_MESSAGES.nameRequired }]}
            />
            <TextAreaField
              name="description"
              label="Miêu tả"
              rules={[
                { required: true, message: ERROR_MESSAGES.descriptionRequired },
              ]}
              rows={4}
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
              <Button block type="primary" htmlType="submit" loading={loading}>
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Spin>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default EditServicePage;
