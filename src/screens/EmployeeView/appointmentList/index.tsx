import React, { useState } from "react";
import { PageHeader, Button, Row, Col } from "antd";
import ListField, { FutureAppointment } from "../component/ListField"; // Import the ListField component
import { Appointment } from "../component/ListField"; // Import the Appointment interface

const AppointmentListPage: React.FC = () => {
  // Sample appointment data
  const initialAppointments: Appointment[] = [
    {
      treatment: "Dental Checkup",
      customerName: "John Doe",
      time: "09:00 AM",
      status: "Pending",
      customerAvatar: "https://example.com/johndoe.jpg",
    },
    {
      treatment: "Eye Examination",
      customerName: "Alice Smith",
      time: "10:30 AM",
      status: "Completed",
      customerAvatar: "https://example.com/alicesmith.jpg",
    },
    {
      treatment: "Physical Therapy",
      customerName: "Bob Johnson",
      time: "02:00 PM",
      status: "Cancelled",
      customerAvatar: "https://example.com/bobjohnson.jpg",
    },
  ];
  const futureAppointments: FutureAppointment[] = [
    {
      treatment: "Dental Checkup",
      customerName: "Jane Smith",
      time: "11:00 AM",
      date: "2023-09-17", // Thêm ngày tháng năm ở đây
      customerAvatar: "https://example.com/janesmith.jpg",
      status: "Scheduled", // Thêm trạng thái ở đây
    },
    // Thêm các cuộc hẹn khác cho lịch trình khám tương tự
  ];

  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  const [futureappointments, setfutureAppointments] =
    useState<FutureAppointment[]>(futureAppointments);

  // Callback function to view appointment details
  const onViewDetail = (appointment: Appointment | FutureAppointment) => {};

  // Callback function to cancel an appointment
  const onCancel = (appointment: Appointment | FutureAppointment) => {};

  return (
    <>
      <PageHeader
        title="Danh sách đặt phiếu khám"
        className="site-page-header"
      />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ListField
            appointments={appointments}
            onViewDetail={onViewDetail}
            onCancel={onCancel}
            futureAppointments={futureappointments}
          />
        </Col>
      </Row>
    </>
  );
};

export default AppointmentListPage;
