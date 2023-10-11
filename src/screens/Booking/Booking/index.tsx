import { useState } from "react";
import { BookingForm } from "../Component";
import "./Booking.css";
import { formConfig, formTypes } from "./Constants"; // Assuming you've properly imported BookingForm
import { EmployeeData } from "components";
type BookProps = {
  typeof_book?: string;
  onClose: () => void;
};
const BookSpa: React.FC<BookProps> = (props) => {
  const { typeof_book = "spa", onClose } = props;

  const [employees, setEmployees] = useState(EmployeeData);
  const [selectedForm, setSelectedForm] = useState(typeof_book);
  const handleFormChange = (form: string) => {
    setSelectedForm(form);
  };
  return (
    <>
      <div className="booking-spa">
        <div className="booking-spa-form">
          <div className="booking-spa-form-content">
            <div className="form-selector"></div>

            <BookingForm {...formConfig[selectedForm]} />
          </div>
        </div>
        <button className="close-button-booking" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default BookSpa;
