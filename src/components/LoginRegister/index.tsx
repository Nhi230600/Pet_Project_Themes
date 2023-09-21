import { Modal } from "antd";
import { useState } from "react";
import { LoginPage, RegisterPage } from "../../screens";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };
  const handleCancelLogin = () => {
    setIsModalLoginOpen(false);
  };

  const showModalRegister = () => {
    setIsModalRegisterOpen(true);
  };
  const handleCancelRegister = () => {
    setIsModalRegisterOpen(false);
  };

  return (
    <div className="header-button">
      <div className="header-button-login">
        <button className="header-button-login-action" onClick={showModalLogin}>
          Đăng nhập
        </button>
        <Modal
          width={800}
          open={isModalLoginOpen}
          onCancel={handleCancelLogin}
          footer={[]}
        >
          <LoginPage />
        </Modal>
      </div>
      <div className="header-button-register">
        <button
          className="header-button-register-action"
          onClick={showModalRegister}
        >
          Đăng ký
        </button>
        <Modal
          width={1000}
          open={isModalRegisterOpen}
          onCancel={handleCancelRegister}
          footer={[]}
        >
          <RegisterPage />
        </Modal>
      </div>
    </div>
  );
};

export default LoginRegister;
