import { Card, Typography } from "antd";
import React, { useState } from "react";
import ListField, {
  Appointment,
  FutureAppointment,
} from "../component/ListField"; // Import the ListField component
import "./AppointmentList.css";

const AppointmentListPage: React.FC = () => {
  // Sample appointment data
  const initialAppointments: Appointment[] = [
    {
      treatment: "Khám da",
      customerName: "Nguyễn Văn A",
      time: "09:00 AM",
      status: 1,
      customerAvatar:
        "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/366960257_3664989567158163_2335320287801021692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=fd1HY63Pfq0AX97T4rR&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI4TcnH6G4WMIOMyMaLXmIOFozNLHT1XVM_aP0JHkliA&oe=650E3213",
    },
    {
      treatment: "Khám mắt",
      customerName: "Nguyễn Nhức Đầu",
      time: "10:30 AM",
      status: 2,
      customerAvatar:
        "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/366960257_3664989567158163_2335320287801021692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=fd1HY63Pfq0AX97T4rR&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI4TcnH6G4WMIOMyMaLXmIOFozNLHT1XVM_aP0JHkliA&oe=650E3213",
    },
    {
      treatment: "Vật lý trị liệu",
      customerName: "Trần Mệt Mõi",
      time: "02:00 PM",
      status: 3,
      customerAvatar:
        "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/366960257_3664989567158163_2335320287801021692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=fd1HY63Pfq0AX97T4rR&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI4TcnH6G4WMIOMyMaLXmIOFozNLHT1XVM_aP0JHkliA&oe=650E3213",
    },
  ];
  const futureAppointments: FutureAppointment[] = [
    {
      treatment: "Trị bệnh dở css",
      customerName: "Lê Trầm Cảm",
      time: "11:00 AM",
      date: "2023-09-17", // Thêm ngày tháng năm ở đây
      customerAvatar:
        "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/366960257_3664989567158163_2335320287801021692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=fd1HY63Pfq0AX97T4rR&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI4TcnH6G4WMIOMyMaLXmIOFozNLHT1XVM_aP0JHkliA&oe=650E3213",
      // Thêm trạng thái ở đây
    },
    {
      treatment: "Trị bệnh đau đầu",
      customerName: "Phạm E",
      time: "11:00 AM",
      date: "2023-09-17", // Thêm ngày tháng năm ở đây
      customerAvatar:
        "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/366960257_3664989567158163_2335320287801021692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=fd1HY63Pfq0AX97T4rR&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAI4TcnH6G4WMIOMyMaLXmIOFozNLHT1XVM_aP0JHkliA&oe=650E3213",
      // Thêm trạng thái ở đây
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
