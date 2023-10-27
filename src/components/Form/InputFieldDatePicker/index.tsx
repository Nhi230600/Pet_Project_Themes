import React from "react";
import { Form, DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

interface InputFieldDatePickerProps {
  name: string;
  label: string;
  rules: Array<any>;
  initialValue?: string;
  disabled?: boolean;
  isRangePicker?: boolean;
}

const InputFieldDatePicker: React.FC<InputFieldDatePickerProps> = ({
  name,
  label,
  rules,
  initialValue,
  disabled,
  isRangePicker = false,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      {isRangePicker ? (
        <RangePicker
          disabled={disabled}
          defaultValue={
            initialValue
              ? [
                  moment(initialValue, "YYYY-MM-DD"),
                  moment(initialValue, "YYYY-MM-DD"),
                ]
              : undefined
          }
        />
      ) : (
        <DatePicker
          disabled={disabled}
          defaultValue={
            initialValue ? moment(initialValue, "YYYY-MM-DD") : undefined
          }
        />
      )}
    </Form.Item>
  );
};

export default InputFieldDatePicker;
