import React from "react";
import { OrderButton } from "..";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";
interface Option {
  value: string;
  label: string;
}

interface BookingFormProps {
  title: string;
  options: [Option[], Option[]];
  timeLabel: string;
  notePlaceholder: string;
}

const BookingForm: React.FC<BookingFormProps> = ({
  title,
  options,
  timeLabel,
  notePlaceholder,
}) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
   navigate("/appointment");
  };
  return (
    <form action="#" className="form-content" >
      <h2 className="booking-spa-form-title">{title}</h2>

      <p>
        {" "}
        Các trường đánh dấu <strong className="important">*</strong> là bắt buộc
      </p>

      <h3>
        {" "}
        YÊU CẦU DỊCH VỤ: <strong className="important">*</strong>
      </h3>

      <p>
        {" "}
        Vui lòng chọn 1 dịch vụ bạn đang cần để PetsLove có thể chuẩn bị, và
        phục vụ các bé một cách chu đáo nhất nhé!
      </p>

      <select className="request-service" name="services" id="services">
        {options[0].map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <h3>GHI CHÚ:</h3>

      <textarea
        className="note-service"
        name="note"
        id="note"
        rows={3}
        placeholder={notePlaceholder}
      ></textarea>

      <OrderButton onClick={handleSubmit}/>
    </form>
  );
};

export default BookingForm;
