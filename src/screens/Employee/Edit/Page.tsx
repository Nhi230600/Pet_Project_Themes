import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Form, Upload } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EditEmployeePage.css";
import { EmployeeData, Employee, InputComponent, Loading } from "components";
interface Choice {
  value: string;
  description: string;
}
const EditEmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState<Employee>({
    account: "",
    appointment: 0,
    avatar: "",
    description: "",
    exp: 0,
    gender: "",
    id: 0,
    name: "",
    password: "",
    position: "",
    type: "",
  });
  const choiceGender: Choice[] = [
    {
      value: "Nam",
      description: "Nam",
    },
    {
      value: "Nữ",
      description: "Nữ",
    },
  ];
  const choice: Choice[] = [
    {
      value: "Bác sĩ",
      description: "Bác sĩ",
    },
    {
      value: "Spa",
      description: "Spa",
    },
    {
      value: "Huấn luyện viên",
      description: "Huấn luyện viên",
    },
  ];
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [type, setType] = useState("");
  useEffect(() => {
    const selectedEmployee = EmployeeData.find(
      (emp) => emp.id.toString() === id,
    );
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      toast.error("Không tìm thấy nhân viên");
    }
  }, []);

  const submit = (value: any) => {
    setLoading(true);
    if (
      employee.name !== "" &&
      employee.position !== "" &&
      employee.account !== "" &&
      employee.password !== "" &&
      employee.exp !== 0 &&
      employee.description !== ""
    ) {
      if (employee.position === "Huấn luyện viên") setType("trainer");
      else if (employee.position === "Spa") setType("Spa");
      else setType("Doctor");
      setLoading(false);
      const updatedEmployeeIndex = EmployeeData.findIndex(
        (employee) => employee.id.toString() === id,
      );
      if (updatedEmployeeIndex !== -1) {
        EmployeeData[updatedEmployeeIndex] = {
          ...EmployeeData[updatedEmployeeIndex],
          name: employee.name,
          position: employee.position,
          account: employee.account,
          password: employee.password,
          exp: employee.exp,
          type: type,
          gender: employee.gender,
          avatar: uploadedImage
            ? URL.createObjectURL(uploadedImage)
            : employee.avatar,
          description: employee.description,
        };
      }

      toast.success("Sửa thành công", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate(`/admin/employee/${id}`);
    } else {
      toast.error("Không để trống", {
        autoClose: 2000,
        hideProgressBar: true,
      });
      setLoading(false);
    }
    setLoading(false);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onChangeName = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      name: newValue,
    }));
  };
  const onChangePosition = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      position: newValue,
    }));
  };
  const onChangeAccount = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      account: newValue,
    }));
  };
  const onChangePassword = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      password: newValue,
    }));
  };
  const onChangeExp = (newValue: number | string) => {
    if (typeof newValue === "number") {
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        exp: newValue,
      }));
    } else if (typeof newValue === "string") {
      const parsedValue = parseFloat(newValue);
      if (!isNaN(parsedValue)) {
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          exp: parsedValue,
        }));
      }
    }
  };
  const onChangeDescription = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      description: newValue,
    }));
  };
  const onChangeGender = (newValue: string) => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      gender: newValue,
    }));
  };

  const handleImageChange = (info: any) => {
    if (info.file.status === "done") {
      setUploadedImage(info.file.originFileObj);
    }
    setLoading(false);
  };
  const customRequest = ({ file, onSuccess }: any) => {
    setLoading(true);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const uploadProps = {
    customRequest,
    showUploadList: false,
    onChange: handleImageChange,
  };

  return (
    <div>
      {loading && <Loading />}
      <Card
        title={` Chỉnh sửa thông tin nhân viên ${id}`}
        className="edit-employee-card"
      >
        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
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
              src={
                uploadedImage
                  ? URL.createObjectURL(uploadedImage)
                  : employee.avatar
              }
              alt="Uploaded"
            />
          </div>
          <div className="image-avatar">
            <Upload {...uploadProps}>
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
            </Upload>
          </div>
        </Form.Item>

        <InputComponent
          content="Họ và tên"
          description={employee.name}
          onChange={onChangeName}
        />
        <InputComponent
          content="Chức vụ"
          description={employee.position}
          select={choice}
          type="select"
          onChange={onChangePosition}
        />
        <InputComponent
          content="Tài khoản"
          description={employee.account}
          onChange={onChangeAccount}
        />
        <InputComponent
          content="Mật khẩu"
          description={employee.password}
          onChange={onChangePassword}
        />
        <InputComponent
          content="Kinh nghiệm(năm)"
          description={employee.exp.toString()}
          type="number"
          onChange={onChangeExp}
        />
        <InputComponent
          content="Mô tả"
          description={employee.description}
          onChange={onChangeDescription}
        />
        <InputComponent
          content="Giới tính"
          description={employee.gender}
          select={choiceGender}
          type="select"
          onChange={onChangeGender}
        />
        <div className="edit-Button-employee-container">
          <Button
            className="edit-Button-employee"
            type="primary"
            onClick={submit}
          >
            Lưu
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EditEmployeePage;
