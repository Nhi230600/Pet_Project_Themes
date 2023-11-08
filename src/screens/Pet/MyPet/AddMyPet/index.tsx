import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Upload } from "antd";
import { InputConponent, Nav } from "components";
import { petData } from "components/PetConstant";
import Pet from "components/PetConstant/Type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddMyPet.css";

interface Choice {
  value: string;
  description: string;
}
function AddMyPet() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [PetAge, setPetAge] = useState<number | null>(null);
  const [petBreed, setPetBreed] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petGender, setPetGender] = useState("male");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const choice: Choice[] = [
    {
      value: "male",
      description: "Đực",
    },
    {
      value: "female",
      description: "Cái",
    },
  ];
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
  const onFinish = async (values: any) => {
    if (
      uploadedImage &&
      PetAge &&
      petBreed !== "" &&
      petDescription !== "" &&
      petName !== ""
    ) {
      let petDataLength = petData.length;
      const newPet: Pet = {
        age: PetAge ?? 0,
        breed: petBreed,
        description: petDescription,
        gender: petGender,
        name: petName,
        id: petDataLength + 1,
        image: URL.createObjectURL(uploadedImage),
      };
      petData.push(newPet);

      navigate("/mypet");
    } else {
      toast.error("Đủ thông tin vào");
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onChangePetname = (newPetName: string) => {
    setPetName(newPetName);
  };
  const onChangePetAge = (newPetAge: number | string) => {
    if (typeof newPetAge === "number") {
      setPetAge(newPetAge);
    } else if (typeof newPetAge === "string") {
      const parsedValue = parseFloat(newPetAge);
      if (!isNaN(parsedValue)) {
        setPetAge(parsedValue);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChangePetAge(newValue);
  };

  const onChangePetBreed = (newPetBreed: string) => {
    setPetBreed(newPetBreed);
  };
  const onChangePetDescription = (newPetDescription: string) => {
    setPetDescription(newPetDescription);
  };
  const onChangePetGender = (newPetGender: string) => {
    setPetGender(newPetGender);
  };
  const deleteImage = () => {
    setUploadedImage(null);
  };
  return (
    <div>
      <Nav />
      <div className="add-mypet-container">
        <h1>Thêm thú cưng của bạn</h1>
        <Form
          name="addPetForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tải ảnh"
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            {uploadedImage ? (
              <>
                {" "}
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
                      uploadedImage ? URL.createObjectURL(uploadedImage) : ""
                    }
                    alt="Uploaded"
                  />
                </div>
                <button onClick={deleteImage}>Xóa ảnh</button>
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
          <InputConponent
            content="Tên thú cưng"
            description={petName}
            onChange={onChangePetname}
          />

          <InputConponent
            type="number"
            content="Tuổi"
            description={PetAge !== null ? PetAge.toString() : ""}
            onChange={onChangePetAge}
          />

          <InputConponent
            content="Nguồn gốc"
            description={petBreed}
            onChange={onChangePetBreed}
          />

          <InputConponent
            content="Đặc điểm"
            description={petDescription}
            onChange={onChangePetDescription}
          />

          <InputConponent
            content="Giới tính"
            description="male"
            onChange={onChangePetGender}
            type="select"
            select={choice}
          />

          <Form.Item className="button-save-mypet-container">
            <button className="button-save-mypet" type="submit">
              Hoàn thành
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddMyPet;
