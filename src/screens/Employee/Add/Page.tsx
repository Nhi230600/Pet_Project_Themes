import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Upload } from "antd";
import "antd/dist/antd.css";
import { EmployeeData, Employee, InputConponent } from "components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddEmployeePage.css";
import { useForm } from "react-hook-form";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const optionsPosition = [
  { value: "Spa", description: "Spa" },
  { value: "Huấn luyện viên", description: "Huấn luyện viên" },
  { value: "Bác sĩ", description: "Bác sĩ" },
];
const optionsGender = [
  { value: "Nam", description: "Nam" },
  { value: "Nữ", description: "Nữ" },
];
interface InputInfo {
  content: string;
  description: string;
  type: string;
  field: string;
  select?: Choice[];
  onChange: (value: string) => void;
}
interface Choice {
  value: string;
  description: string;
}
const AddEmployeePage = () => {
  const { register, handleSubmit } = useForm();
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("Bác sĩ");
  const [exp, setExp] = useState<number | null>(null);
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("Nam");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      setUploadedImage(info.file.originFileObj);
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
    onChange: handleImageChange,
  };
  const handleInputName = (value: string) => {
    setName(value);
  };
  const handleInputAccount = (value: string) => {
    setAccount(value);
  };
  const handleInputPassword = (value: string) => {
    setPassword(value);
  };
  const handleInputExp = (value: number | string) => {
    if (typeof value === "number") {
      setExp(value);
    } else if (typeof value === "string") {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        setExp(parsedValue);
      }
    }
  };
  const handleInputDesciption = (value: string) => {
    setDescription(value);
  };
  const handleInputGender = (value: string) => {
    setGender(value);
  };
  const handleInputPosition = (value: string) => {
    setPosition(value);
  };
  const deleteImage = () => {
    setUploadedImage(null);
  };
  const onSubmit = (data: any) => {
    let type = "";
    if (position === "Spa") type = "spa";
    else if (position === "Huấn luyện viên") type = "trainer";
    else type = "care";
    if (uploadedImage) {
      const lastEmployee = EmployeeData[EmployeeData.length - 1];
      const lastEmployeeId = lastEmployee ? lastEmployee.id : 0;
      const newEmployeeId = lastEmployeeId + 1;
      const newEmployee: Employee = {
        account: data.account,
        appointment: 0,
        avatar: URL.createObjectURL(uploadedImage),
        description: data.description,
        exp: data.exp,
        gender: data.gender,
        name: data.name,
        password: data.password,
        position: data.position,
        type: type,
        id: newEmployeeId,
      };
      EmployeeData.push(newEmployee);
      toast.success("Thêm thành công");
      navigate("/admin/employee");
    } else {
      toast.error("Tải ảnh lên");
    }
  };
  const inputInfo: InputInfo[] = [
    {
      content: "Họ tên",
      description: name,
      type: "text",
      field: "name",
      onChange: handleInputName,
    },
    {
      content: "Tài khoản",
      description: account,
      type: "text",
      field: "account",
      onChange: handleInputAccount,
    },
    {
      content: "Mật khẩu",
      description: password,
      type: "text",
      field: "password",
      onChange: handleInputPassword,
    },
    {
      content: "Chức vụ",
      description: position,
      type: "select",
      field: "position",
      select: optionsPosition,
      onChange: handleInputGender,
    },
    {
      content: "Kinh Nghiệm",
      description: exp !== null ? exp.toString() : "",
      type: "number",
      field: "exp",
      onChange: handleInputExp,
    },
    {
      content: "Mô tả",
      description: description,
      type: "text",
      field: "description",
      onChange: handleInputDesciption,
    },
    {
      content: "Giới tính",
      description: gender,
      type: "select",
      field: "gender",
      select: optionsGender,
      onChange: handleInputGender,
    },
  ];

  return (
    <Card className="add-employee-card" title="Thêm nhân viên">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item label="Tải ảnh" name="upload" valuePropName="fileList">
          {uploadedImage ? (
            <>
              <div className="image-avatar">
                {" "}
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "0.3rem solid black",
                  }}
                  src={uploadedImage ? URL.createObjectURL(uploadedImage) : ""}
                  alt="Uploaded"
                />
              </div>
              <div className="image-avatar">
                {" "}
                <Button onClick={deleteImage}>Xóa ảnh</Button>
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
        {inputInfo.map((input, index) => (
          <InputConponent
            key={index}
            content={input.content}
            description={input.description}
            type={input.type}
            register={register}
            field={input.field}
            select={input.select}
            validationRules={{
              required: true,
              maxLength: 100,
            }}
            onChange={input.onChange}
          />
        ))}
        <Button className="add-Button" block type="primary" htmlType="submit">
          Thêm nhân viên
        </Button>
      </form>
    </Card>
  );
};

export default AddEmployeePage;
