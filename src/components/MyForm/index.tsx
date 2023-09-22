import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Card } from 'antd';
import { Store } from 'antd/lib/form/interface';
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from '@ant-design/icons';

interface MyFormProps {
    onSubmit: (formData: Store) => void;
    fieldData: { name: string, label: string, rules: any[] }[];
}


const MyForm: React.FC<MyFormProps> = ({ onSubmit, fieldData }) => {
    const [fileList, setFileList] = useState<any[]>([]);
    const onFinish = (values: Store) => {
        onSubmit(values);
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
        <Card title= 'Thêm nhân viên'>

  
        <Form name="myForm" onFinish={onFinish}>
            {fieldData.map((field) => {
                if (field.name === 'Avatar') {
                    return (
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
                                { required: true, message: 'Please upload your avatar!' },
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
                    );
                }

                return (
                    <Form.Item
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        rules={field.rules}
                    >
                        <Input />
                    </Form.Item>
                );
            })}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </Card>
    );
};

export default MyForm;
