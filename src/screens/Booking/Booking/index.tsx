import Employee from "components/EmployeeConstant/Type";
import { useEffect, useState } from "react";
import { BookingForm } from "../Component";
import "./Booking.css";
import { formConfig } from "./Constants";
import { petData } from "components/PetConstant";

type BookProps = {
  typeof_book?: string;
  onClose: () => void;
  employee: Employee;
  start: string;
  end: string;
  setCheckadd: (newValue: number) => void;
  checkadd: number;
  setPopup: (newValue: boolean) => void;
};

const BookSpa: React.FC<BookProps> = (props) => {
  const { employee, onClose, start, end, setCheckadd, checkadd, setPopup } =
    props;
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

            <BookingForm
              {...formConfig[`${type}`]}
              listPet={petData}
              start={start}
              end={end}
              employee_id={employee.id}
              setCheckadd={setCheckadd}
              checkadd={checkadd}
              setPopup={setPopup}
            />
          </div>
        </div>
        <button className="close-button-booking" onClick={onClose}>
          &times;
        </button>
      </div>
    </>
  );
};

export default BookSpa;
