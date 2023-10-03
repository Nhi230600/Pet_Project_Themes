import Nav from "components/Nav";
import { useState } from "react";
import "./BookSpa.css";
import { BookingForm} from "../Component";
import {
  formTypes,
  formConfig,
} from "./Constants"; // Assuming you've properly imported BookingForm

type BookProps = {
  typeof_book?: string;
};

const BookSpa = (props: BookProps) => {
  const { typeof_book = "spa" } = props;

  const [selectedForm, setSelectedForm] = useState(typeof_book);

  const handleFormChange = (form: string) => {
    setSelectedForm(form);
  };

  return (
    <>
      <Nav />
      <div className="booking-spa">
        <h1 className="booking-spa-title">Booking Online 24/7</h1>
        <div className="booking-spa-form">
          <div className="booking-spa-form-content">
            <div className="form-selector">
              {formTypes.map((formType) => (
                <button
                  key={formType}
                  className={`form-btn ${
                    selectedForm === formType ? "active" : ""
                  }`}
                  onClick={() => handleFormChange(formType)}
                >
                  {formType.toUpperCase()}
                </button>
              ))}
            </div>
            {formConfig[selectedForm] && (
              <BookingForm {...formConfig[selectedForm]} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSpa;