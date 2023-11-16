import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, List, Typography, Tag } from "antd";
import {
  Customer,
  Appointment,
  CustomerData,
  initialAppointments,
  Popup,
} from "components";
import Cancel from "images/status/cancel.png";
import Waiting from "images/status/wait.png";
import Done from "images/status/done.png";

import "./OrderAppointment.css";

const { Meta } = Card;
const { Text } = Typography;

const OrderAppointment = () => {
  const [popup, setPopup] = useState(false);
  const [CurrentAppointment, setCurrentAppointment] = useState<number>(-1);
  const { CustomerId } = useParams();
  const [customer, setCustomer] = useState<Customer>({
    account: "",
    address: "",
    appointments: 0,
    avatar: "",
    id: -1,
    name: "",
    password: "",
    phone: "",
  });
  const [customerAppointments, setCustomerAppointments] = useState<
    Appointment[]
  >([]);
  const [customerNotFound, setCustomerNotFound] = useState(false);

  useEffect(() => {
    if (CustomerId) {
      const findCustomer = CustomerData.find(
        (p) => p.id === parseInt(CustomerId, 10),
      );
      if (findCustomer) {
        setCustomer(findCustomer);
        setCustomerNotFound(false);
      } else {
        setCustomerNotFound(true);
      }
    }
  }, [CustomerId]);
  const onFinish = () => {
    if (CurrentAppointment) {
      const index = initialAppointments.findIndex(
        (appointment) => appointment.id === CurrentAppointment,
      );

      if (index !== -1) {
        initialAppointments[index] = {
          ...initialAppointments[index],
          status: 3,
        };

        const customerId = CustomerId ? parseInt(CustomerId, 10) : undefined;
        setCustomerAppointments(
          initialAppointments.filter(
            (appointment) => appointment.idPet === customerId,
          ),
        );
      }
    }
  };

  useEffect(() => {
    const customerId = CustomerId ? parseInt(CustomerId, 10) : undefined;
    const appointmentsOfCustomer = initialAppointments.filter(
      (appointment) => appointment.idPet === customerId,
    );
    setCustomerAppointments(appointmentsOfCustomer);
  }, [CustomerId]);

  if (customerNotFound) {
    return <div>Không tìm thấy khách hàng</div>;
  }
  const setShowPopup = () => {
    setPopup(false);
  };

  return (
    <div className="order-appointment-container">
      <h1>Danh sách Appointments của {customer.name}</h1>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={customerAppointments}
        renderItem={(appointment) => (
          <List.Item>
            <Card hoverable>
              <Meta
                title={appointment.treatment}
                description={
                  <div className="status-cell-appointment">
                    <Text strong>Trạng thái:</Text>{" "}
                    {appointment.status === 1 ? (
                      <button
                        onClick={() => {
                          setPopup(true);
                          setCurrentAppointment(appointment.id);
                        }}
                      >
                        <img src={Waiting} />
                      </button>
                    ) : appointment.status === 2 ? (
                      <img src={Done} />
                    ) : (
                      <img src={Cancel} />
                    )}
                  </div>
                }
              />
              <Text>{appointment.time}</Text>
            </Card>
          </List.Item>
        )}
      />
      {popup && <Popup onFinish={onFinish} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default OrderAppointment;
