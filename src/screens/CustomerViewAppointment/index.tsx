import React, { useState, useEffect } from "react";
import "./CustomerViewAppointment.css";
import dayjs from "dayjs";
import { AppointmentListComponent } from "./components";
import { Loading, Nav } from "components";

import axios from "axios";
interface Appointment {
  id: number;
  start: string;
  end: string;
  status: number;
  employee_id: string;
  customer_id: string;
}

const CustomerViewAppointment: React.FC = () => {
  const id = 1;
  const currentDate = dayjs();
  const [chooseDate, setChooseDate] = useState(currentDate);
  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");
  const firstDay = currentDate.date(1);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);
  const [loading, setLoading] = useState(false);

  const updateAppointments = (updatedAppointments: Appointment[]) => {
    setAppointments(updatedAppointments);
  };
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://zzzzzz-rr1t.onrender.com/api/appointment/getByCustomer/${id}`,
        );
        const appointmentsWithIndochinaTime: Appointment[] = response.data.map(
          (appointment: Appointment) => {
            const start = dayjs(appointment.start).subtract(7, "hour").format();
            const end = dayjs(appointment.end).subtract(7, "hour").format();
            return { ...appointment, start, end };
          },
        );

        setAppointments(appointmentsWithIndochinaTime);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
      setLoading(false);
    };

    fetchAppointments();
  }, [id]);
  const handleDayClick = (clickedDate: dayjs.Dayjs) => {
    setChooseDate(clickedDate);
  };
  useEffect(() => {
    const filteredAppointments = appointments.filter((appointment) => {
      const appointmentDate = dayjs(appointment.start);
      return appointmentDate.isSame(chooseDate, "day");
    });
    setFilteredAppointments(filteredAppointments);
  }, [appointments, chooseDate]);

  const daysInMonth: dayjs.Dayjs[] = [];
  for (let i = 0; i < 7 * 5; i++) {
    const day = firstDay.add(i, "day");
    daysInMonth.push(day);
  }
  const appointmentDates = appointments.map((appointment) =>
    dayjs(appointment.start),
  );
  const calendar = daysInMonth.map((day, index) => {
    const isCurrentDate = day.isSame(currentDate, "day");
    const isDifferentMonth = day.month() !== currentDate.month();
    const hasAppointment = appointmentDates.some((appointmentDate) =>
      day.isSame(appointmentDate, "day"),
    );

    const classNames = `day-number ${
      isCurrentDate ? "day-number_current" : ""
    } ${isDifferentMonth ? "day-number_disabled" : ""} ${
      hasAppointment ? "day-number_has_appointment" : ""
    }`;

    return (
      <p key={index} className={classNames} onClick={() => handleDayClick(day)}>
        {day.date()}
      </p>
    );
  });

  return (
    <div>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="appointment_container">
          <div className="container_appointment_customer">
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
                  ),
                )}
              </div>
              <div className="days">{calendar}</div>
            </div>
          </div>
          <div className="appointment_list_component">
            {" "}
            <AppointmentListComponent
              initialAppointments={filteredAppointments}
              onUpdateAppointments={updateAppointments}
              allAppointment={appointments}
              chooseDate={chooseDate.format("YYYY-MM-DD HH:mm:ss")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerViewAppointment;
