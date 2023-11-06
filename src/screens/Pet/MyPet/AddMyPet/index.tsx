import { PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, Radio, Select, Upload } from "antd";
import { Nav } from "components";
import { petData } from "components/PetConstant";
import { useState } from "react";
import "./AddMyPet.css";
import Pet from "components/PetConstant/Type";
import { useNavigate } from "react-router-dom";
import { InputConponent } from "components";
const { Option } = Select;

function AddMyPet() {
  const [newPet, setNewPet] = useState({});
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [petName, setPetName] = useState("");
  const [petDOB, setPetDOB] = useState("");

  const onFinish = (values: Pet) => {
    setNewPet(values);
    petData.push(values);
    console.log("Dữ liệu được gửi:", values);

    navigate("/mypet");
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
  const onChangePetname = (newPetName: string) => {
    setPetName(newPetName);
  };
  const onChangePetDoB = (newPetDoB: string) => {
    setPetDOB(newPetDoB);
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
            className="input-add-mypet"
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
                  <div style={{ marginTop: 8 }}>Tải ảnh</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <InputConponent
            content="Tên thú cưng"
            description={petName}
            onChange={onChangePetname}
          />

          <InputConponent
            type="date"
            content="Ngày sinh"
            description={petDOB}
            onChange={onChangePetDoB}
          />

          <Form.Item className="input-add-mypet" label="Nguồn gốc">
            <Input className="input-add-mypet-fill" />
          </Form.Item>

          <Form.Item className="input-add-mypet" label="Đặc điểm">
            <Input.TextArea className="input-add-mypet-fill" />
          </Form.Item>

          <Form.Item className="input-add-mypet" label="Giới tính">
            <Radio.Group className="radio-mypet">
              <Radio value="male"> Đực </Radio>
              <Radio value="female"> Cái </Radio>
            </Radio.Group>
          </Form.Item>

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
