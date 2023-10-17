// InputField.js
import { Form, Input } from "antd";
import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  rules: Array<any>;
  initialValue?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  rules,
  initialValue,
  disabled,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input disabled={disabled} defaultValue={initialValue} />
    </Form.Item>
  );
};

export default InputField;
