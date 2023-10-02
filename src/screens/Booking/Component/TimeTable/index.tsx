import React from "react";
import "./TimeTable.css";

const slots = [
  { id: "slot-1", label: "8:00-9:00", status: 1 },
  { id: "slot-2", label: "9:00-10:00", status: 2 },
  { id: "slot-3", label: "10:00-11:00", status: 1 },
  { id: "slot-4", label: "11:00-12:00", status: 2 },
  { id: "slot-5", label: "12:00-13:00", status: 1 },
  { id: "slot-6", label: "13:00-14:00", status: 2 },
];

const TimeTable = () => {
  return (
    <div className="section over-hide z-bigger">
      <div className="section over-hide z-bigger">
        <div className="container pb-5">
          <div className="row justify-content-center pb-5">
            <div className="col-12 pb-5">
              {slots.map((slot) => (
                <React.Fragment key={slot.id}>
                  <input
                    className="checkbox-slots"
                    type="radio"
                    name="slots"
                    id={slot.id}
                    defaultChecked={slot.status === 1}
                    disabled={slot.status === 2}
                    data-status={slot.status}
                  />
                  <label className="for-checkbox-slots" htmlFor={slot.id}>
                    <i></i>
                    {slot.label}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
