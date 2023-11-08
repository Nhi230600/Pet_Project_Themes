import "./Button.css";

type btnProps = {
  btnName: string;
  btnWidth: string;
  btnHeight: string;
  onClick?: () => void;
};

const Button = (props: btnProps) => {
  const { btnName, btnWidth, btnHeight, onClick } = props;
  return (
    <div>
      <button
        onClick={onClick}
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
