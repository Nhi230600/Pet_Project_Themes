import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Upload } from "antd";
import { Customer, CustomerData, InputComponent } from "components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddCustomer.css";
const AddCustomer: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedAvatar, setUploadedAvatar] = useState<File | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerAccount, setCustomerAccount] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const onFinish = async (values: any) => {
    if (
      uploadedAvatar &&
      customerName !== "" &&
      customerAccount !== "" &&
      customerPassword !== "" &&
      customerPhone !== "" &&
      customerAddress !== ""
    ) {
      let customerDataLength = CustomerData.length;
      const newCustomer: Customer = {
        name: customerName,
        account: customerAccount,
        password: customerPassword,
        phone: customerPhone,
        address: customerAddress,
        id: customerDataLength + 1,
        avatar: URL.createObjectURL(uploadedAvatar),
        appointments: 0,
      };
      CustomerData.push(newCustomer);
      toast.success("Tạo thành công");
      navigate("/admin/customer");
    } else {
      toast.error("Chưa điền hết kìa má!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleAvatarChange = (info: any) => {
    if (info.file.status === "done") {
      setUploadedAvatar(info.file.originFileObj);
    }
  };
  const customRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const uploadProps = {
    customRequest,
    showUploadList: false,
    onChange: handleAvatarChange,
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const deleteAvatar = () => {
    setUploadedAvatar(null);
  };

  const onChangeCustomerName = (newCustomerName: string) => {
    setCustomerName(newCustomerName);
  };
  const onChangeCustomerAccount = (newCustomerAccount: string) => {
    setCustomerAccount(newCustomerAccount);
  };
  const onChangeCustomerPassword = (newCustomerPassword: string) => {
    setCustomerPassword(newCustomerPassword);
  };
  const onChangeCustomerPhone = (newCustomerPhone: string) => {
    setCustomerPhone(newCustomerPhone);
  };
  const onChangeCustomerAddress = (newCustomerAddress: string) => {
    setCustomerAddress(newCustomerAddress);
  };
  return (
    <div>
      <div className="add-customer-container">
        <h1>Thêm khách hàng</h1>
        <Form
          name="customerForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            label="Tải ảnh"
            style={{ fontWeight: "bold" }}
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            {uploadedAvatar ? (
              <>
                <div className="image-avatar-customer">
                  <img
                    src={
                      uploadedAvatar ? URL.createObjectURL(uploadedAvatar) : ""
                    }
                    alt="Uploaded"
                  />
                </div>
                <div className="button-delete-image-container">
                  <button
                    onClick={deleteAvatar}
                    className="button-delete-image"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ marginRight: "0.5rem" }}
                    />
                    Xóa ảnh
                  </button>
                </div>
              </>
            ) : (
              <Upload {...uploadProps}>
                <div>
                  <label
                    htmlFor="imageUpload"
                    className="container-profile-avatar-upload-button styled"
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ marginRight: "1rem" }}
                    />
                    Click to Upload
                  </label>
                </div>
              </Upload>
            )}
          </Form.Item>

          <InputComponent
            content="Tên Khách Hàng"
            description={customerName}
            onChange={onChangeCustomerName}
          />

          <InputComponent
            content="Tài Khoản"
            description={customerAccount}
            onChange={onChangeCustomerAccount}
          />
          <InputComponent
            content="Mật khẩu"
            description={customerPassword}
            onChange={onChangeCustomerPassword}
          />

          <InputComponent
            content="Số điện thoại"
            description={customerPhone}
            onChange={onChangeCustomerPhone}
          />
          <InputComponent
            content="Địa chỉ"
            description={customerAddress}
            onChange={onChangeCustomerAddress}
          />

          <Form.Item className="button-save-customer-container">
            <button className="button-save-customer" type="submit">
              Thêm khách hàng
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCustomer;
