import { Card, Typography } from "antd";
import React, { useState, useEffect } from "react";
import ListField from "../component/ListField";
import Appointment from "components/AppointmentConstant/Type";
import FutureAppointment from "components/FutureAppointmentConstant/Type";
import { initialAppointments } from "components/AppointmentConstant";
import "./AppointmentList.css";

const AppointmentListPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [futureAppointments, setFutureAppointments] = useState<Appointment[]>(
    [],
  );
  const onCancel = (appointment: Appointment | FutureAppointment) => {};
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayAppointments = initialAppointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.time);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate.getTime() === today.getTime();
    });
    const futureAppointments = initialAppointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.time);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate > today;
    });
    setAppointments(todayAppointments);
    setFutureAppointments(futureAppointments);
  }, []);
  return (
    <>
      <div>
        <div className="list-container-appointment">
          <Typography.Title level={2}>Danh sách đặt lịch khám</Typography.Title>
        </div>
        <br />

        <Card className="list-appointment">
          <ListField
            appointments={appointments}
            onCancel={onCancel}
            title="Lịch hẹn hôm nay"
          />
        </Card>
        <Card className="list-appointment">
          <ListField
            appointments={futureAppointments}
            onCancel={onCancel}
            title="Lịch hẹn hôm sau"
          />
        </Card>
      </div>
    </>
  );
};

export default AppointmentListPage;
