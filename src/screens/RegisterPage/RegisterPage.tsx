import { Form, Input } from "antd";
import { useState } from "react";
import Logo from "../../images/logo.png";
import "./RegisterPage.css";

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

  return (
    
    <div className="container-register">
      <div className="container-register-header">
        <div className="container-register-header-logo">
          <img style={{ width: "180%" }} src={Logo} alt="logo" />
        </div>
        <div className="container-register-header-name">
          <span
            style={{
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
              message: "Vui lòng nhập họ tên!",
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
              message: "Vui lòng nhập số điện thoại!",
            },
            {
              pattern: /^[0-9]{10}$/,
              message: "Số điện thoại gồm 10 số và không có kí tự lạ!",
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
              message: "Vui lòng nhập tài khoản!",
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
              message: "Vui lòng nhập mật khẩu!",
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
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Nhắc lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Mật khẩu không trùng khớp!"));
              },
            }),
          ]}
        >
          <Input.Password
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>

        <Form.Item>
          label="Mật khẩu: " name="password" rules=
          {[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          <Input.Password
            style={{
              height: "2.5vw",
              boxShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu: "
          name="repeatpassword"
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
          <button
            onSubmit={handleValidation}
            type="submit"
            className="container-register-submit"
          >
            Đăng ký
          </button>
        </Form.Item>
      </Form>
    </div>
    
  );
};

export default RegisterPage;
