import "./Button.css";

type btnProps = {
  btnName: string;
  btnWidth: string;
  btnHeight: string;
};

const Button = (props: btnProps) => {
  const { btnName, btnWidth, btnHeight } = props;
  return (
    <div>
      <button
        className={
          "trainerlist-container-content-detail-btn " +
          "w-" +
          btnWidth +
          " h-" +
          btnHeight
        }
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;