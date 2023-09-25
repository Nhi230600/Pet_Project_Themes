import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Logo from "../../images/logo.png";
import "./Footer.css";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  const {} = props;

  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <div className="footer-logo-image">
            <img style={{ width: "80%" }} src={Logo} alt="Logo" />
          </div>
          <div className="footer-logo-name">
            <a
              href=""
              style={{
                textDecoration: "none",
              }}
            ></a>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-name">
            <span>INFORMATION</span>
          </div>
          <div className="footer-information-content">
            <div>
              <EnvironmentOutlined className="icon-footer" />
              <a href="">Số 16, Bế Văn Đàn,Ghềnh Ráng, Thàng phố Quy Nhơn </a>
            </div>
            <div>
              <PhoneOutlined className="icon-footer" />
              <a href="">+82234421104</a>
            </div>
            <div>
              <ClockCircleOutlined className="icon-footer" />
              <a href="">08:00 MON - 23:00 SAT</a>
            </div>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-name">
            <span>LOCATION</span>
          </div>
          <div className="footer-information-content">
            <div>
              <ShopOutlined className="icon-footer" />
              <a href="">Chi nhánh tại TPHCM</a>
            </div>
            <div>
              <ShopOutlined className="icon-footer" />
              <a href="">Chi nhánh tại Hà Nội</a>
            </div>
            <div>
              <ShopOutlined className="icon-footer" />
              <a href="">Chi nhánh tại Đà Nẵng</a>
            </div>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-name">
            <span>NETWORK</span>
          </div>
          <div className="footer-information-content">
            <div>
              <FacebookOutlined className="icon-footer" />
              <a href="">Facebook</a>
            </div>
            <div>
              <InstagramOutlined className="icon-footer" />
              <a href="">Instagram</a>
            </div>
            <div>
              <MailOutlined className="icon-footer" />
              <a href="">Email</a>
            </div>
          </div>
        </div>
      </footer>
      <div className="">
        <div className="copy-right">
          <div className="copy-right-content">
            <p className="col-12">&copy; Copyright 2023 - FPT software</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
