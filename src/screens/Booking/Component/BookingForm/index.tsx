import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OrderButton } from "..";
import "./BookingForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import Pet from "components/PetConstant/Type";
import { petData } from "components/PetConstant";

interface Option {
  value: string;
  label: string;
}

interface BookingFormProps {
  title: string;
  options: [Option[], Option[]];
  timeLabel: string;
  notePlaceholder: string;
  start: string;
  end: string;
  employee_id: number;
  setCheckadd: (newValue: number) => void;
  checkadd: number;
  setPopup: (newValue: boolean) => void;
  listPet: Pet[];
}

const BookingForm: React.FC<BookingFormProps> = ({
  title,
  options,
  timeLabel,
  notePlaceholder,
  start,
  end,
  employee_id,
  setCheckadd,
  checkadd,
  setPopup,
  listPet,
}) => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const requestData = {
      start,
      end,
      employee_id,
    };

    axios
      .post("https://zzzzzz-rr1t.onrender.com/api/appointment/add", requestData)
      .then((response) => {
        // Xử lý kết quả từ server
        if (response.data.success) {
          // Chuyển hướng sau khi gửi thành công
          toast.success("Đặt đơn thành công");
        } else {
          // Xử lý lỗi nếu cần
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có lỗi kết nối
        toast.error("Lỗi");
      });
    setCheckadd(checkadd + 1);
    setPopup(false);
  };

  return (
    <form action="#" className="form-content">
      <h2 className="booking-spa-form-title">{title}</h2>
      <h3>YÊU CẦU DỊCH VỤ:</h3>
      <p>
        Vui lòng chọn 1 dịch vụ bạn đang cần để PetsLove có thể chuẩn bị, và
        phục vụ các bé một cách chu đáo nhất nhé!
      </p>
      <select
        className="request-service"
        name="services"
        id="services"
        onChange={(e) => setService(e.target.value)}
      >
        {options[0].map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <select>
        {listPet.map((pet: Pet) => {
          {
            pet.name;
          }
        })}
      </select>
      <h3>GHI CHÚ:</h3>

      <textarea
        className="note-service"
        name="note"
        id="note"
        rows={3}
        placeholder={notePlaceholder}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <OrderButton onClick={handleSubmit} />
    </form>
  );
};

export default BookingForm;
