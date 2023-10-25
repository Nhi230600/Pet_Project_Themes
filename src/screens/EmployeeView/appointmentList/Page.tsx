import { Card, Typography } from "antd";
import React, { useState } from "react";
import ListField from "../component/ListField";
import Appointment from "components/AppointmentConstant/Type";
import FutureAppointment from "components/FutureAppointmentConstant/Type";
import { initialAppointments } from "components/AppointmentConstant";
import { futureAppointments } from "components/FutureAppointmentConstant";
import "./AppointmentList.css";

const AppointmentListPage: React.FC = () => {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  const [futureappointments, setfutureAppointments] =
    useState<FutureAppointment[]>(futureAppointments);
  const onViewDetail = (appointment: Appointment | FutureAppointment) => {};
  const onCancel = (appointment: Appointment | FutureAppointment) => {};
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
            onViewDetail={onViewDetail}
            onCancel={onCancel}
            futureAppointments={futureappointments}
          />
        </Card>
      </div>
    </>
  );
};

export default AppointmentListPage;
