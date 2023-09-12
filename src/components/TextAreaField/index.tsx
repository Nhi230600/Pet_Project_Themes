import { Form } from "antd";
import React from "react";

interface TextAreaFieldProps {
  name: string;
  label: string;
  rules: Array<any>;
  initialValue?: string;
  rows?: number; // Thêm rows vào props
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  name,
  label,
  rules,
  initialValue,
  rows,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <textarea rows={rows} defaultValue={initialValue} />
    </Form.Item>
  );
};

export default TextAreaField;
