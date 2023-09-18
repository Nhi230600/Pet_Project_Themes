import React, { useState } from "react";
import { PageHeader, Button, Row, Col, Typography, Card } from "antd";
import ListField, { FutureAppointment } from "../component/ListField"; // Import the ListField component
import { Appointment } from "../component/ListField"; // Import the Appointment interface
import "./AppointmentList.css";

const AppointmentListPage: React.FC = () => {
  // Sample appointment data
  const initialAppointments: Appointment[] = [
    {
      treatment: "Khám da",
      customerName: "Nguyễn Văn A",
      time: "09:00 AM",
      status: "Đang chờ",
      customerAvatar: "https://example.com/johndoe.jpg",
    },
    {
      treatment: "Khám mắt",
      customerName: "Nguyễn Nhức Đầu",
      time: "10:30 AM",
      status: "Hoàn thành",
      customerAvatar: "https://example.com/alicesmith.jpg",
    },
    {
      treatment: "Vật lý trị liệu",
      customerName: "Trần Mệt Mõi",
      time: "02:00 PM",
      status: "Đã hủy",
      customerAvatar: "https://example.com/bobjohnson.jpg",
    },
  ];
  const futureAppointments: FutureAppointment[] = [
    {
      treatment: "Trị bệnh dở css",
      customerName: "Lê Trầm Cảm",
      time: "11:00 AM",
      date: "2023-09-17", // Thêm ngày tháng năm ở đây
      customerAvatar: "https://example.com/janesmith.jpg",
      status: "Scheduled", // Thêm trạng thái ở đây
    },
    {
      treatment: "Trị bệnh đau đầu",
      customerName: "Phạm E",
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
      <div>
        <div className="list-container">
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
