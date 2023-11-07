// Input.tsx
import React from 'react';
import './InputComponent.css';

interface InputProps {
  content: string;
  description: string;
  type?: string;
  onChange?: (value: string) => void;
  select?: Choice[];
}
interface Choice {
  value: string;
  description: string;
}

const InputComponent: React.FC<InputProps> = ({ content, description, type, onChange, select }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderInput = () => {
    if (type === 'number') {
      return (
        <input
          style={{
            width: '100%',
            borderRadius: '0.5vw',
            height: '3vw',
            border: 'none'
          }}
          type="number"
          value={description}
          onChange={handleInputChange}
        />
      );
    } else if (type === 'pickdate') {
      return (
        <input
          type="date"
          style={{
            width: '100%',
            borderRadius: '0.5vw',
            height: '3vw',
            border: 'none'
          }}
          value={description}
          onChange={handleInputChange}
        />
      );
    } else if (type === 'select') {
      return (
        <select
          style={{
            width: '100%',
            borderRadius: '0.5vw',
            height: '3vw',
            border: 'none'
          }}
        >
          {select?.map((choice: Choice) => {
            <option value={choice.value}>{choice.description}</option>;
          })}
        </select>
      );
    } else {
      return (
        <input
          style={{
            width: '100%',
            borderRadius: '0.5vw',
            height: '3vw',
            border: 'none'
          }}
          type="text"
          value={description}
          onChange={handleInputChange}
        />
      );
    }
  };

  return (
    <div className="container-profile-form-infor-name">
      <div className="container-profile-form-infor-name-label">{content}</div>
      <div className="container-profile-form-infor-name-input">{renderInput()}</div>
    </div>
  );
};

export default InputComponent;