import React from "react";
import "./Button.css";

type btnProps = {
  name_btn: string;
  width_btn: string;
  height_btn: string;
};

const Button = (props: btnProps) => {
  const { name_btn, width_btn, height_btn } = props;
  return (
    <div>
      <button
        className={
          "trainerlist-container-content-detail-btn " +
          "w-" +
          width_btn +
          " h-" +
          height_btn
        }
      >
        {name_btn}
      </button>
    </div>
  );
};

export default Button;
