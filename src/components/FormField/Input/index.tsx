// Input.tsx
import React from "react";
import "./InputComponent.css";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  content: string;
  description: string;
  type?: string;
  onChange?: (value: string) => void;
  select?: Choice[];
  register?: UseFormRegister<FieldValues>;
  field?: string;
  validationRules?: {
    required?: boolean;
    maxLength?: number;
    // Thêm các quy tắc kiểm tra khác nếu cần thiết
  };
}
interface Choice {
  value: string;
  description: string;
}

const InputComponent: React.FC<InputProps> = ({
  content,
  description,
  type,
  onChange,
  select,
  register,
  field,
  validationRules,
}) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderInput = () => {
    if (type === "number") {
      return (
        <input
          {...(register &&
            field && {
              ...register(field, {
                required: validationRules?.required || false,
                maxLength: validationRules?.maxLength || undefined,
              }),
            })}
          style={{
            width: "100%",
            borderRadius: "0.5vw",
            height: "3vw",
            border: "none",
          }}
          type="number"
          value={description}
          onChange={handleInputChange}
        />
      );
    } else if (type === "pickdate") {
      return (
        <input
          {...(register &&
            field && {
              ...register(field, {
                required: validationRules?.required || false,
                maxLength: validationRules?.maxLength || undefined,
              }),
            })}
          type="date"
          style={{
            width: "100%",
            borderRadius: "0.5vw",
            height: "3vw",
            border: "none",
          }}
          value={description}
          onChange={handleInputChange}
        />
      );
    } else if (type === "select") {
      return (
        <select
          {...(register &&
            field && {
              ...register(field, {
                required: validationRules?.required || false,
                maxLength: validationRules?.maxLength || undefined,
              }),
            })}
          style={{
            width: "100%",
            borderRadius: "0.5vw",
            height: "3vw",
            border: "none",
          }}
          value={description}
          onChange={handleInputChange}
        >
          {select?.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.description}
            </option>
          ))}
        </select>
      );
    } else if (type === "password") {
      return (
        <input
          {...(register &&
            field && {
              ...register(field, {
                required: validationRules?.required || false,
                maxLength: validationRules?.maxLength || undefined,
              }),
            })}
          type="password"
          style={{
            width: "100%",
            borderRadius: "0.5vw",
            height: "3vw",
            border: "none",
          }}
          value={description}
          onChange={handleInputChange}
        />
      );
    } else {
      return (
        <input
          {...(register &&
            field && {
              ...register(field, {
                required: validationRules?.required || false,
                maxLength: validationRules?.maxLength || undefined,
              }),
            })}
          type="text"
          style={{
            width: "100%",
            borderRadius: "0.5vw",
            height: "3vw",
            border: "none",
          }}
          value={description}
          onChange={handleInputChange}
        />
      );
    }
  };

  return (
    <div className="container-profile-form-infor-name">
      <div className="container-profile-form-infor-name-label">{content}</div>
      <div className="container-profile-form-infor-name-input">
        {renderInput()}
      </div>
    </div>
  );
};

export default InputComponent;
