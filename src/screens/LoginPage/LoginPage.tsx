import { Checkbox, Form, Input } from "antd";
import { FONTSIZE } from "../../application/config/constants";
import Logo from "../../images/logo.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css";
import axios from 'axios'; 

const LoginPage = () => {
  const onFinish = async (values : any) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        account: values.account,
        password: values.password,
      });

      // Handle a successful login response here (e.g., set user token, redirect, etc.)
      if (response.data.success){
        const accountJson = JSON.stringify(response.data.user);
        sessionStorage.setItem('account', accountJson);
        window.location.href = '/';
      }
      else{
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
      

    } catch (error) {
      // Handle login failure (e.g., show an error message)
      console.error('Login failed:', error);
    }
  };

  const onFinishFailed = (errorInfo : any) => {
    // Handle form validation failure here
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-login">
      <ToastContainer />
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
        onFinish={onFinish} // Call onFinish when the form is submitted
        onFinishFailed={onFinishFailed} // Call onFinishFailed on form validation failure
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