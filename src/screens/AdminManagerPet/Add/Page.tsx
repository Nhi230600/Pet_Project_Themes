import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Upload } from "antd";
import { Pet, petData, InputComponent } from "components";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddPet: React.FC = () => {
  const { CustomerId } = useParams();
  const navigate = useNavigate();
  const [uploadedAvatar, setUploadedAvatar] = useState<File | null>(null);
  const [name, setname] = useState("");
  const [breed, setbreed] = useState("");
  const [description, setdescription] = useState("");
  const [gender, setgender] = useState("Đực");
  const [age, setAge] = useState<number | null>(null);
  const selectGender = [
    {
      value: "Đực",
      description: "Đực",
    },
    {
      value: "Cái",
      description: "Cái",
    },
  ];
  const onFinish = async (values: any) => {
    if (
      uploadedAvatar &&
      name !== "" &&
      breed !== "" &&
      description !== "" &&
      gender !== "" &&
      age &&
      CustomerId
    ) {
      const lastPet = petData[petData.length - 1];
      const lastPetId = lastPet ? lastPet.id : 0;
      const newPetId = lastPetId + 1;
      const newPet: Pet = {
        name: name,
        breed: breed,
        description: description,
        gender: gender,
        age: age,
        id: newPetId,
        image: URL.createObjectURL(uploadedAvatar),
        idCustomer: parseInt(CustomerId, 10),
      };
      petData.push(newPet);
      toast.success("Tạo thành công");
      navigate(`/admin/customer/${CustomerId}/pet`);
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

  const onChangename = (newname: string) => {
    setname(newname);
  };
  const onChangebreed = (newbreed: string) => {
    setbreed(newbreed);
  };
  const onChangedescription = (newdescription: string) => {
    setdescription(newdescription);
  };
  const onChangegender = (newgender: string) => {
    setgender(newgender);
  };
  const onChangePetAge = (petage: number | string) => {
    if (typeof petage === "number") {
      setAge(petage);
    } else if (typeof petage === "string") {
      const parsedValue = parseFloat(petage);
      if (!isNaN(parsedValue)) {
        setAge(parsedValue);
      }
    }
  };
  return (
    <div>
      <div className="add-Pet-container">
        <h1>Thêm khách hàng</h1>
        <Form
          name="PetForm"
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
                <div className="image-avatar-Pet">
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
            content="Tên"
            description={name}
            onChange={onChangename}
          />

          <InputComponent
            content="Nguồn gốc"
            description={breed}
            onChange={onChangebreed}
          />
          <InputComponent
            content="Mô tả"
            description={description}
            onChange={onChangedescription}
          />

          <InputComponent
            content="Giới tính"
            description={gender}
            type="select"
            select={selectGender}
            onChange={onChangegender}
          />
          <InputComponent
            content="Tuổi"
            type="number"
            description={age ? age.toString() : ""}
            onChange={onChangePetAge}
          />

          <Form.Item className="button-save-Pet-container">
            <button className="button-save-Pet" type="submit">
              Thêm khách hàng
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddPet;
