
import React from 'react'
import { Footer, Header } from "../../../components";

import { FONTSIZE } from "../../../constants";
import "./BookTrainer.css";

type BookTrainerProps = {};

const BookTrainer = (props: BookTrainerProps) => {

  const { } = props;

  return (
    <div>
      <Header />
      <div className="container-booktrainer">
        <div
          className="container-booktrainer-heading"
          style={{ fontSize: FONTSIZE.logoLarge }}
        >
          <span>Book Online 24/7</span>
        </div>
        <div className="container-booktrainer-content">
          <form className="container-booktrainer-content-form">
            <h1 className="container-booktrainer-content-form-heading">
              Đặt lịch Huấn luyện
            </h1>
            <p> Đặt lịch nhanh</p>
            <p>
              {" "}
              Các trường đánh dấu <strong className="important">*</strong> là
              bắt buộc
            </p>
            <h3>
              {" "}
              YÊU CẦU TRAINER: <strong className="important">*</strong>
            </h3>
            <p>
              {" "}
              Vui lòng chọn huấn luyện viên bạn yêu thích để NgáoService cử đến
              huấn luyện cho Pet của bạn nhé !
            </p>
            <select name="trainer" id="form-trainer">
              <option value="">Nguyễn Văn A</option>
              <option value="">Nguyễn Văn B</option>
              <option value="">Nguyễn Văn C</option>
              <option value="">Nguyễn Văn D</option>
              <option value="">Nguyễn Văn E</option>
            </select>
            <br />
            <h3>
              THỜI GIAN: <strong className="important">*</strong>
            </h3>
            <input
              type="datetime-local"
              id="form-training-time"
              name="training-time"
            ></input>
            <h3>GHI CHÚ:</h3>

            <textarea
              name="note"
              id="form-training-note"
              rows={300}
              placeholder="Bạn có thắc mắc hay lưu ý nào sao ? Hãy nhập vào đây chúng tôi sẽ hỗ trợ bạn !"
            ></textarea>
            <button className="form-button-send styled" type="button">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default BookTrainer;