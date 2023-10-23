import React, { useState, useEffect } from "react";
import "./CustomerViewAppointment.css";
import dayjs from 'dayjs';

import axios from "axios";
interface   Appointment {
  id: number;
  start: string;
  end: string;
  status: number;
  employee_id: string;
  customer_id: string;
}

const CustomerViewAppointment: React.FC = () => {
  
  const id = 1;
  // Get the current date
  const currentDate = dayjs();
  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");
  const firstDay = currentDate.date(1);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Create an array for the days of the month
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/api/appointment/getByCustomer/${id}`);
        setAppointments(response.data); // Update the state with the fetched appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [id]);
  const daysInMonth: dayjs.Dayjs[] = [];
  for (let i = 0; i < 7*5; i++) {
    const day = firstDay.add(i, "day");
    daysInMonth.push(day);
  }

  // Generate the calendar structure
  const appointmentDates = appointments.map(appointment => {
    // Convert the appointment's start time to Vietnam timezone
    const indochinaTime = dayjs(appointment.start).subtract(7, 'hour'); // Add 7 hours to convert to Indochina Time (UTC+7)
    return indochinaTime;
  });
  console.log(appointmentDates)
  const calendar = daysInMonth.map((day, index) => {
    const isCurrentDate = day.isSame(currentDate, 'day');
    const isDifferentMonth = day.month() !== currentDate.month();
    const hasAppointment = appointmentDates.some(appointmentDate => day.isSame(appointmentDate, 'day'));

    const classNames = `day-number ${isCurrentDate ? "day-number_current" : ""} ${isDifferentMonth ? "day-number_disabled" : ""} ${hasAppointment ? "day-number_has_appointment" : ""}`;

    return (
      <p key={index} className={classNames}>
        {day.date()}
      </p>
    );
  });
  

  return (
    <div className="container_appointment_customer">
      <div className="card">
        <div className="frame">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="cloud cloud_top cloud_slow"></div>
          <div className="cloud cloud_bottom cloud_fast"></div>
          <div className="moon"></div>
          <div className="tree tree_dark-green tree_middle"></div>
          <div className="mountain mountain_dark mountain_top"></div>
          <div className="tree tree_dark-green tree_right"> </div>
          <div className="mountain mountain_light mountain_right"></div>
          <div className="tree tree_light-green tree_left"></div>
          <div className="mountain mountain_light mountain_left"></div>
        </div>
      </div>
      <div className="calendar">
        <div className="header">
          <h1 className="header_title">{currentMonth}</h1>
          <p className="header_subtitle">{currentYear}</p>
        </div>
        <div className="days-of-week">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <p key={index} className="day-name">
                {day}
              </p>
            )
          )}
        </div>
        <div className="days">{calendar}</div>
      </div>
    </div>
  );
};

export default CustomerViewAppointment;
