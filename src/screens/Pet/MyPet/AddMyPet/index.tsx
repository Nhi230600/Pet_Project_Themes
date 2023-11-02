import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import "./AddMyPet.css";
import { Nav } from "components";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;

function AddMyPet() {
  const [fileList, setFileList] = useState<any[]>([]);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Dữ liệu được gửi:", values);
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
    <div>
      <Nav />
      <div className="add-mypet-container">
        <h1>Thêm thú cưng của bạn</h1>
        <Form name="addPetForm" onFinish={onFinish}>
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

          <Form.Item name="petName" label="Tên thú cưng">
            <Input />
          </Form.Item>

          <Form.Item name="petDOB" label="Ngày sinh">
            <DatePicker />
          </Form.Item>

          <Form.Item name="petOrigin" label="Nguồn gốc">
            <Input />
          </Form.Item>

          <Form.Item name="petCharacteristics" label="Đặc điểm">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="petGender" label="Giới tính">
            <Select>
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu thông tin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddMyPet;
