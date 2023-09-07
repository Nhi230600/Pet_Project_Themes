import React, { useState } from "react";
import { Header } from "../../../components";
import Footer from "../../../components/Footer";
import "./BookSpa.css";

const BookSpa = () => {
  const [selectedForm, setSelectedForm] = useState("spa");

  const handleFormChange = (form: any) => {
    setSelectedForm(form);
  };

  return (
    <>
      <Header />
      <div className="booking-spa">
        <h1 className="booking-spa-title">Booking Online 24/7</h1>
        <div className="booking-spa-form">
          <div className="booking-spa-form-content">
            <div className="form-selector">
              <button
                className={`form-btn ${selectedForm === "spa" ? "active" : ""}`}
                onClick={() => handleFormChange("spa")}
              >
                SPA
              </button>
              <button
                className={`form-btn ${selectedForm === "trainer" ? "active" : ""
                  }`}
                onClick={() => handleFormChange("trainer")}
              >
                Trainer
              </button>
              <button
                className={`form-btn ${selectedForm === "care" ? "active" : ""
                  }`}
                onClick={() => handleFormChange("care")}
              >
                Care
              </button>
            </div>
            {selectedForm === "spa" && (
              <form action="#" className="form-content">
                <h2 className="booking-spa-form-title">Đặt lịch SPA</h2>
                <p> Đặt lịch nhanh</p>
                <p>
                  {" "}
                  Các trường đánh dấu <strong className="important">*</strong> là
                  bắt buộc
                </p>
                <h3>
                  {" "}
                  YÊU CẦU DỊCH VỤ: <strong className="important">*</strong>
                </h3>
                <p>
                  {" "}
                  Vui lòng chọn 1 dịch vụ bạn đang cần để NgáoService có thể chuẩn
                  bị, và phục vụ các bé một cách chu đáo nhất nhé!
                </p>
                <select name="services" id="services">
                  <option value="">Tắm vệ sinh</option>
                  <option value="">Cắt tỉa lông</option>
                  <option value="">Combo 1: (Tắm sấy + vệ sinh)</option>
                  <option value="">Combo 2: (Cắt tỉa lông + vệ sinh)</option>
                  <option value="">
                    Combo 3: (Tắm sấy + vệ sinh + cắt tỉa lông)
                  </option>
                  <option value="">
                    Combo 4: (Tắm sấy + vệ sinh + cạo lông)
                  </option>
                </select>
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  <option value="">Chọn nhân viên Spa</option>
                  <option value="employee1">Nhân viên 1</option>
                  <option value="employee2">Nhân viên 2</option>
                  {/* Thêm các tùy chọn khác cho nhân viên Spa */}
                </select>
                <h3>
                  THỜI GIAN: <strong className="important">*</strong>
                </h3>
                <input
                  type="datetime-local"
                  id="spa-time"
                  name="spa-time"
                ></input>
                <h3>GHI CHÚ:</h3>
                <textarea
                  name="note"
                  id="note"
                  rows={300}
                  placeholder="Nhập một vài mô tả tình trạng của các bé để chuyên viên của chúng tôt có thể hỗ trợ bạn tốt nhất ..."
                ></textarea>
                <button className="form-btn styled" type="button">
                  Gửi yêu cầu
                </button>
              </form>

            )}
            {selectedForm === "trainer" && (
              <form action="#" className="form-content">
                <h2 className="booking-spa-form-title">Đặt lịch Trainer</h2>
                <p> Đặt lịch nhanh</p>
                <p>
                  {" "}
                  Các trường đánh dấu <strong className="important">*</strong> là
                  bắt buộc
                </p>
                <h3>
                  {" "}
                  YÊU CẦU DỊCH VỤ: <strong className="important">*</strong>
                </h3>
                <p>
                  {" "}
                  Vui lòng chọn 1 dịch vụ bạn đang cần để NgáoService có thể chuẩn
                  bị, và phục vụ các bé một cách chu đáo nhất nhé!
                </p>
                <select name="services" id="services">
                  <option value="">Dạy học</option>
                  <option value="">Huấn luyện thể thao</option>
                  {/* Thêm các tùy chọn khác cho dịch vụ Trainer */}
                </select>
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  <option value="">Chọn nhân viên Spa</option>
                  <option value="employee1">Nhân viên 1</option>
                  <option value="employee2">Nhân viên 2</option>
                  {/* Thêm các tùy chọn khác cho nhân viên Spa */}
                </select>
                <h3>
                  THỜI GIAN: <strong className="important">*</strong>
                </h3>
                <input
                  type="datetime-local"
                  id="trainer-time"
                  name="trainer-time"
                ></input>
                <h3>GHI CHÚ:</h3>
                <textarea
                  name="note"
                  id="note"
                  rows={300}
                  placeholder="Nhập một vài yêu cầu hoặc thông tin khác về lịch học/training..."
                ></textarea>
                <button className="form-btn styled" type="button">
                  Gửi yêu cầu
                </button>
              </form>

            )}
            {selectedForm === "care" && (
              <form action="#" className="form-content">
                <h2 className="booking-spa-form-title">Đặt lịch Care</h2>
                <p> Đặt lịch nhanh</p>
                <p>
                  {" "}
                  Các trường đánh dấu <strong className="important">*</strong> là
                  bắt buộc
                </p>
                <h3>
                  {" "}
                  YÊU CẦU DỊCH VỤ: <strong className="important">*</strong>
                </h3>
                <p>
                  {" "}
                  Vui lòng chọn 1 dịch vụ bạn đang cần để NgáoService có thể chuẩn
                  bị, và phục vụ các bé một cách chu đáo nhất nhé!
                </p>
                <select name="services" id="services">
                  <option value="">Chăm sóc trẻ</option>
                  <option value="">Giúp việc gia đình</option>
                  {/* Thêm các tùy chọn khác cho dịch vụ Care */}
                </select>
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  <option value="">Chọn nhân viên Spa</option>
                  <option value="employee1">Nhân viên 1</option>
                  <option value="employee2">Nhân viên 2</option>
                  {/* Thêm các tùy chọn khác cho nhân viên Spa */}
                </select>
                <h3>
                  THỜI GIAN: <strong className="important">*</strong>
                </h3>
                <input
                  type="datetime-local"
                  id="care-time"
                  name="care-time"
                ></input>
                <h3>GHI CHÚ:</h3>
                <textarea
                  name="note"
                  id="note"
                  rows={300}
                  placeholder="Nhập một vài yêu cầu hoặc thông tin khác về chăm sóc/trợ giúp gia đình..."
                ></textarea>
                <button className="form-btn styled" type="button">
                  Gửi yêu cầu
                </button>
              </form>

            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSpa;
