import { Checkbox, Form, Input } from "antd";
import { FONTSIZE } from "../../constants";
import Logo from "../../images/logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-login">
      <div className="container-login-header">
        <div className="container-login-header-logo">
          <img style={{ width: "180%" }} src={Logo} alt="logo" />
        </div>
        <div className="container-login-header-name">
          <span
            style={{
              fontSize: FONTSIZE.logoSmall,
              textShadow: "0.1rem 0.2rem 0.1rem rgb(245, 214, 129)",
            }}
          >
            ĐĂNG NHẬP
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
          label="Tên tài khoản: "
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 2,
            span: 16,
          }}
        >
          <button type="submit" className="container-login-submit">
            Đăng nhập
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;