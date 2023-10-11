import Employee from "components/EmployeeConstant/Type";
import { useEffect, useState } from "react";
import { BookingForm } from "../Component";
import "./Booking.css";
import { formConfig } from "./Constants"; // Assuming you've properly imported BookingForm

type BookProps = {
  typeof_book?: string;
  onClose: () => void;
  employee: Employee;
};

const BookSpa: React.FC<BookProps> = (props) => {
  const { employee, onClose } = props;
  const [employeeDetail, setEmployeeDetail] = useState(employee);
  const [type, setType] = useState("spa");
  useEffect(() => {
    setType(employeeDetail.type);
  }, [employeeDetail.type]);

  return (
    <>
      <div className="booking-spa">
        <div className="booking-spa-form">
          <div className="booking-spa-form-content">
            <div className="form-selector"></div>

            <BookingForm {...formConfig[`${type}`]} />
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
