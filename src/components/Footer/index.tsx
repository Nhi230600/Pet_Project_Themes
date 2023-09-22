import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import {
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../images/logo.png";
import "./Footer.css";

type FooterProps = {};

const Footer = (props: FooterProps) => {
  const { } = props;

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
            >
            </a>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-name">
            <span>INFORMATION</span>
          </div>
          <div className="footer-information-content">
            <div>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="icon-footer"
              />
              <a href="">397-5 Hapjeong-dong, Mapo-gu, Seoul, Hàn Quốc</a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="icon-footer"

              />
              <a href="">+82234421104</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className="icon-footer" />
              <a href="">08:00 MON - 23:00 SAT</a>
            </div>
          </div>
        </div>
        <div className="footer-information">
          <div className="footer-information-name">
            <span>SERVICE</span>
          </div>
          <div className="footer-information-content">
            <div>
              <FontAwesomeIcon
                icon={faStreetView}
                className="icon-footer"

              />
              <a href="">Chi nhánh tại TPHCM</a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faStreetView}
                className="icon-footer"
              />
              <a href="">Chi nhánh tại Hà Nội</a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faStreetView}
                className="icon-footer"
              />
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
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon-footer"
              />
              <a href="">Email</a>
            </div>
          </div>

        </div>


      </footer>
      <div className="">
        <div className="copy-right">
          <div className="copy-right-content">
            <p className="col-12">
              © Copyright 2023  - FPT software
            </p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Footer;
