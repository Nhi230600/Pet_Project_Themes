import React from "react";
import { List, Avatar, Button } from "antd";
import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export interface Appointment {
  treatment: string;
  customerName: string;
  time: string;
  status: string;
  customerAvatar: string;
}

export interface FutureAppointment {
  treatment: string;
  customerName: string;
  time: string;
  status: string;
  customerAvatar: string;
  date: string;
}

interface ListFieldProps {
  appointments: Appointment[];
  futureAppointments: FutureAppointment[];
  onViewDetail: (appointment: Appointment | FutureAppointment) => void;
  onCancel: (appointment: Appointment | FutureAppointment) => void;
}
const currentDate = new Date();
const currentDateTitle = `Hôm nay, ${currentDate.toLocaleDateString()} `;
const ListField: React.FC<ListFieldProps> = ({
  appointments,
  futureAppointments,
  onViewDetail,
  onCancel,
}) => {
  return (
    <>
      <h4>Appointments {currentDateTitle}</h4>
      <List
        dataSource={appointments}
        renderItem={(item: Appointment) => (
          <List.Item
            actions={[
              <Link to="/employee/customer">
                <Button icon={<EyeOutlined />} />
              </Link>,
              <Button
                icon={<CloseOutlined />}
                onClick={() => onCancel(item)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.customerAvatar} />}
              title={item.treatment}
              description={
                <>
                  <div>{item.customerName}</div>
                  <div>{item.time}</div>
                  <div>{item.status}</div>
                </>
              }
            />
          </List.Item>
        )}
      />
      <h4>Future Appointments</h4>
      <List
        dataSource={futureAppointments}
        renderItem={(item: FutureAppointment) => (
          <List.Item
            actions={[
              <Button
                icon={<EyeOutlined />}
                onClick={() => onViewDetail(item)}
              />,
              <Button
                icon={<CloseOutlined />}
                onClick={() => onCancel(item)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.customerAvatar} />}
              title={item.treatment}
              description={
                <>
                  <div>{item.customerName}</div>
                  <div>{item.time}</div>
                  <div>{item.date}</div>
                  <div>{item.status}</div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ListField;
