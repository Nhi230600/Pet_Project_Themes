import { Checkbox, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";
import LogoNav from "components/LogoHeader";

const LoginPage = () => {
  const onFinish = async (values: any) => {
    const { account } = values;
    if (account === "1") {
      sessionStorage.setItem("account", "1");
      window.location.href = "/";
    } else if (account === "2") {
      sessionStorage.setItem("account", "2");
      window.location.href = "/admin";
    } else if (account === "3") {
      sessionStorage.setItem("account", "3");
      window.location.href = "/employee";
    } else {
      toast.error("Tài khoản không tồn tại!!");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    toast.error("Lỗi!!! 🤔");
  };

  return (
    <div className="container-login">
      <ToastContainer />
      <div className="container-login-header">
        <div className="container-login-header-logo">
          <LogoNav />
        </div>
        <div className="container-login-header-name">
          <span>ĐĂNG NHẬP</span>
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên tài khoản: "
          name="account"
          rules={[
            {
              required: true,
              message: "Please input your account!",
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
