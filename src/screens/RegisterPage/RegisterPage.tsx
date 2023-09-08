<<<<<<< HEAD
import { Checkbox, Form, Input } from "antd";
import "./Register.css";
import Logo from "../../images/logo.png";
import { FONTSIZE } from "../../constants";

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
=======
import { Form, Input } from "antd";
import { FONTSIZE } from "../../constants";
import Logo from "../../images/logo.png";
import "./RegisterPage.css";
import { useState } from "react";

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: "",
    phonenumber: "",
    email: "",
    username: "",
    password: "",
    repeatpassword: "",
  });

  function handleInput(event: any) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  }

  function handleValidation(event: any) {
    event.preventDefault();
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

>>>>>>> master
  return (
    <div className="container-register">
      <div className="container-register-header">
        <div className="container-register-header-logo">
          <img style={{ width: "180%" }} src={Logo} alt="logo" />
        </div>
        <div className="container-register-header-name">
          <span
            style={{
              fontSize: FONTSIZE.logoSmall,
              textShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          >
            ĐĂNG KÝ
          </span>
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Họ tên: "
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Số điện thoại: "
          name="phonenumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Email: "
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Tên tài khoản: "
          name="username"
          rules={[
            {
              required: true,
<<<<<<< HEAD
              message: "Please input your phone number!",
=======
              message: "Please input your username!",
>>>>>>> master
            },
          ]}
        >
          <Input
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu: "
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu: "
<<<<<<< HEAD
          name="password"
=======
          name="repeatpassword"
>>>>>>> master
          rules={[
            {
              required: true,
              message: "Please input your password repeat!",
            },
          ]}
        >
          <Input.Password
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
        >
<<<<<<< HEAD
          <button type="submit" className="container-register-submit">
=======
          <button
            onSubmit={handleValidation}
            type="submit"
            className="container-register-submit"
          >
>>>>>>> master
            Đăng ký
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
