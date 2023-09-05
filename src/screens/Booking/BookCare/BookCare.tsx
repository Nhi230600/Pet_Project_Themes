import React from 'react'
import './BookCare.css'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { FONTSIZE } from '../../../constants'
import { DatePicker, Space } from 'antd';
import { Footer, HeaderUser } from "../../../components";
import { FONTSIZE } from "../../../constants";
import "./BookCare.css";

const BookCare = () => {
  return (
    <div>
      <HeaderUser />
      <div className="container-bookcare">
        <div
          className="container-bookcare-heading"
          style={{ fontSize: FONTSIZE.logoLarge }}
        >
          <span>Book Online 24/7</span>
        </div>
        <div className="container-bookcare-content">
          <form className="container-bookcare-content-form">
            <h1 className="container-bookcare-content-form-heading">
              Đặt lịch Khám bệnh
            </h1>
            <p> Đặt lịch nhanh</p>
            <p>
              {" "}
              Các trường đánh dấu <strong className="important">*</strong> là
              bắt buộc
            </p>
            <h3>
              {" "}
              TÌNH TRẠNG BỆNH LÝ: <strong className="important">*</strong>
            </h3>
            <p>
              {" "}
              Vui lòng nhập tình trạng bệnh của thú cưng để NgáoService xem xét
              tình trạng và cử bác sĩ đến chăm sóc cho Pet của bạn nhé !
            </p>
            <textarea
              name="detail"
              id="form-care-detail"
              rows={300}
              placeholder="Nhập tình trạng bệnh của thú cưng bạn tại đây ..."
            ></textarea>
            <br />
            <h3>
              THỜI GIAN HẸN KHÁM: <strong className="important">*</strong>
            </h3>
            <input
              type="datetime-local"
              id="form-care-time"
              name="care-time"
            ></input>
            <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker status="error" style={{ width: "100%" }} />
            </Space>
            <h3>GHI CHÚ:</h3>
            <textarea
              name="note"
              id="form-care-note"
              rows={300}
              placeholder="Bạn có thắc mắc hay lưu ý nào sao ? Hãy nhập vào đây chúng tôi sẽ hỗ trợ bạn !"
            ></textarea>
            <button className="form-button-send styled" type="button">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookCare;
