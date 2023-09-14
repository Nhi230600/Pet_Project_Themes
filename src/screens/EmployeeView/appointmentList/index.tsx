import React, { useState } from 'react';
import { PageHeader, Button, Row, Col } from 'antd';
import ListField from '../component/ListField'; // Import the ListField component
import { Appointment } from '../component/ListField'; // Import the Appointment interface

const AppointmentListPage: React.FC = () => {
  // Sample appointment data
  const initialAppointments: Appointment[] = [
    {
      treatment: 'Dental Checkup',
      customerName: 'John Doe',
      time: '09:00 AM',
      status: 'Pending',
      customerAvatar: 'https://example.com/johndoe.jpg',
    },
    {
      treatment: 'Eye Examination',
      customerName: 'Alice Smith',
      time: '10:30 AM',
      status: 'Completed',
      customerAvatar: 'https://example.com/alicesmith.jpg',
    },
    {
      treatment: 'Physical Therapy',
      customerName: 'Bob Johnson',
      time: '02:00 PM',
      status: 'Cancelled',
      customerAvatar: 'https://example.com/bobjohnson.jpg',
    },
  ];

  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  // Callback function to view appointment details
  const onViewDetail = (appointment: Appointment) => {
    // Add your logic here to view appointment details
    console.log(`Viewing details for appointment: ${appointment.customerName}`);
  };

  // Callback function to cancel an appointment
  const onCancel = (appointment: Appointment) => {
    // Add your logic here to cancel the appointment
    console.log(`Cancelling appointment: ${appointment.customerName}`);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Appointments List"
        extra={[
          <Button key="1" type="primary">
            New Appointment
          </Button>,
        ]}
      />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ListField appointments={appointments} onViewDetail={onViewDetail} onCancel={onCancel} />
        </Col>
      </Row>
    </>
  );
};

export default AppointmentListPage;
