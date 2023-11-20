import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, List, Typography, Tag, Pagination } from "antd";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  useEffect(() => {
    const customerId = CustomerId ? parseInt(CustomerId, 10) : undefined;
    const appointmentsOfCustomer = initialAppointments.filter(
      (appointment) => appointment.idPet === customerId,
    );
    setCustomerAppointments(appointmentsOfCustomer);
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
  const setShowPopup = () => {
    setPopup(false);
  };

  const indexOfLastAppointment = currentPage * itemsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - itemsPerPage;
  const currentAppointments = customerAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment,
  );

  if (customerNotFound) {
    return <div>Không tìm thấy khách hàng</div>;
  }

  return (
    <div className="order-appointment-title">
      <h1>Danh sách Appointments của {customer.name}</h1>
      <div className="order-appointment-container">
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={currentAppointments}
          renderItem={(appointment) => (
            <List.Item className="">
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
                          <img src={Waiting} alt="Waiting" />
                        </button>
                      ) : appointment.status === 2 ? (
                        <img src={Done} alt="Done" />
                      ) : (
                        <img src={Cancel} alt="Cancel" />
                      )}
                    </div>
                  }
                />
                <Text>{appointment.time}</Text>
              </Card>
            </List.Item>
          )}
        />
        <Pagination
          className="pagination-order-appointment"
          current={currentPage}
          total={customerAppointments.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
        {popup && <Popup onFinish={onFinish} setShowPopup={setShowPopup} />}
      </div>
    </div>
  );
};

export default OrderAppointment;
