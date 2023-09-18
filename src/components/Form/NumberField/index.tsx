
import React from "react";
import { Form, InputNumber } from "antd";

interface NumberFieldProps {
  name: string;
  label: string;
  rules: Array<any>;
}

const NumberField: React.FC<NumberFieldProps> = ({ name, label, rules }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <InputNumber style={{ width: "100%" }} />
    </Form.Item>
  );
};

export default NumberField;
