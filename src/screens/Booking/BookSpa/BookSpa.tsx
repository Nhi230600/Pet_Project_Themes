import React, { useState } from "react";
import { Header } from "../../../components";
import Footer from "../../../components/Footer";
import "./BookSpa.css";

type BookProps = {
  typeof_book? : string;
}

const BookSpa = (props : BookProps) => {
  
  const { typeof_book = "spa"} = props;
 

  const [selectedForm, setSelectedForm] = useState(typeof_book);

  const handleFormChange = (form: any) => {
    setSelectedForm(form);
  };

  const optionsSpa = [
    [
    {
      label: "Tỉa lông",
      value: "",
    },

    {
      label: "Tắm rửa",
      value: ""
    },

    {
      label: "Massage",
      value: "",
    },

    {
      label: "Manicure và Pedicure",
      value: "",
    },

    {
      label: "Nhuộm lông",
      value: "",
    }
    ],
    
    [
    {
      label: "Nguyễn Văn A",
      value: "",
    },

    {
      label: "Phạm Thị D",
      value: "",
    },

    {
      label: "Mai Thị F",
      value: "",
    },

    {
      label: "Đinh Văn H",
      value: "",
    },

    ]
  ]

  const optionsTrainer = [
    [
      {
        label: "Khóa học cơ bản",
        value: '',
      },
      {
        label: "Khóa học nâng cao",
        value: '',
      },
      {
        label: "Khóa học chó sủa",
        value: '',
      },
    ],
    
    [
      {
        label: "Lê Quang C",
        value: '',
      },

      {
        label: "Lý Thanh G",
        value: '',
      },

      {
        label: "Trần Văn J",
        value: '',
      },
    ]

  ]

  const optionsCare = [
    [
      {
        label: "Kiểm tra sức khỏe định kỳ",
        value: '',  
      },

      {
        label: "Chăm sóc y tế",
        value: '',  
      },

      {
        label: "Phòng ngừa bệnh",
        value: '',  
      },
      
    ],

    [

      {
        label: "Trần Thị B",
        value: '',
      },

      {
        label: "Hoàng Văn E",
        value: '',
      },
      
      {
        label: "Vũ Thị I",
        value: '',
      }

    ]

  ]


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
                {optionsSpa[0].map((option) => (
                    <option value={option.value}>{option.label}</option>))  
                }
                </select>
                
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  {optionsSpa[1].map((option) => (
                    <option value={option.value}>{option.label}</option>))  
                  }
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
                  {optionsTrainer[0].map((option) => (
                      <option value={option.value}>{option.label}</option>))  
                  }
                  {/* Thêm các tùy chọn khác cho dịch vụ Trainer */}
                </select>
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  {optionsTrainer[1].map((option) => (
                      <option value={option.value}>{option.label}</option>))  
                  }
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
                  {optionsCare[0].map((option) => (
                      <option value={option.value}>{option.label}</option>))  
                  }
                  {/* Thêm các tùy chọn khác cho dịch vụ Care */}
                </select>
                <br />
                <h3>
                  CHỌN NHÂN VIÊN: <strong className="important">*</strong>
                </h3>
                <select name="services" id="services">
                  {optionsCare[1].map((option) => (
                      <option value={option.value}>{option.label}</option>))  
                  }
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