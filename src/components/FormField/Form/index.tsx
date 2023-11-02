import React, { useEffect, useState } from "react";
import Input from "../Input";
import "./Form.css";

interface Props {
  input: Input[];
}

interface Input {
  content: string;
  description: string;
}

const Form: React.FC<Props> = ({ input }) => {
  
  return (
    <div className="container-profile-form">
      <div className="container-profile-form-infor">
        {input.map((item: Input) => (
          <Input
            content={item.content}
            description={item.description}
   
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
