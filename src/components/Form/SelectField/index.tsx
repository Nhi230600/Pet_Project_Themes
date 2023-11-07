import React from 'react';
import { Form, Select, Radio } from 'antd';
import './SelectField.css';
const { Option } = Select;

interface SelectFieldProps {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  rules: Array<any>;
  useRadio?: boolean;
  initialValue?: string;
  onChange?: (value: any) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, rules, useRadio, initialValue, onChange }) => {
  if (useRadio) {
    return (
      <div>
        <Form.Item name={name} label={label} rules={rules} initialValue={initialValue}>
          <Radio.Group>
            {options.map(option => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </div>
    );
  } else {
    return (
      <Form.Item name={name} label={label} rules={rules} initialValue={initialValue}>
        <Select onChange={onChange}>
          {options.map(option => (
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
