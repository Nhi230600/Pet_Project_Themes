import React from "react";
import { Form, Select, Radio } from "antd";

const { Option } = Select;

interface SelectFieldProps {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  rules: Array<any>;
  useRadio?: boolean;
  initialValue?: string;
  onChange?: (value: any) => void; // Thêm onChange vào props
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, rules, useRadio, initialValue, onChange }) => {
  if (useRadio) {
    return (
      <Form.Item name={name} label={label} rules={rules} initialValue={initialValue}>
        <Radio.Group>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    );
  } else {
    return (
      <Form.Item name={name} label={label} rules={rules} initialValue={initialValue}>
        <Select onChange={onChange}> {/* Sử dụng onChange ở đây */}
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    );
  }
};

export default SelectField;
