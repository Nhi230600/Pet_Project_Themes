import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import LogoNav from "components/LogoHeader";
import "./Footer.css";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  const {} = props;

  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <LogoNav />
        </div>

        <div className="footer-information">
          <div className="footer-information-name">
            <span>INFORMATION</span>
          </div>
          <div className="footer-information-content">
            <div>
              <EnvironmentOutlined className="icon-footer" />
              <a href="">Số 16,Bế Văn Đàn,Ghềnh Ráng,Tp Quy Nhơn</a>
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
            <p className="col-12">&copy; Copyright 2023 - PetsLove</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
