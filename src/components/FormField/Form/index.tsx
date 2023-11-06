import React, { useEffect, useState } from 'react';
import InputComponent from '../Input';
import './Form.css';

interface Props {
  input: InputType[];
}

interface InputType {
  content: string;
  description: string;
}

const Form: React.FC<Props> = ({ input }) => {
  return (
    <div className="container-profile-form">
      <div className="container-profile-form-infor">
        {input.map((item: InputType) => (
          <InputComponent content={item.content} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Form;
