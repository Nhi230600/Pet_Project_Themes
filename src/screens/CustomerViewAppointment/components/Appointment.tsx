import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Cancel from "images/status/cancel.png";
import Waiting from "images/status/wait.png";
import Done from "images/status/done.png";
import Popup from "./Popup";
interface Appointment {
  id: number;
  start: string;
  end: string;
  status: number;
  employee_id: string;
  customer_id: string;
}

interface Props {
  initialAppointments: Appointment[];
  chooseDate: String;
  onUpdateAppointments: (updatedAppointments: Appointment[]) => void;
  allAppointment: Appointment[];
}

const AppointmentListComponent: React.FC<Props> = ({
  initialAppointments,
  chooseDate,
  onUpdateAppointments,
  allAppointment
}) => {
  const [Appointments, setAppointments] = useState<Appointment[]>(initialAppointments) ;
  useEffect(() => {
    setAppointments(initialAppointments);
  }, [initialAppointments]);
  useEffect(() => {
    const sortedAppointments = [...Appointments].sort((a, b) => {
      return dayjs(a.start).isBefore(dayjs(b.start)) ? -1 : 1;
    });
  
    setAppointments(sortedAppointments);
  }, []);
  const [popup, setPopup] = useState(false);
  const [CurrentAppointment, setCurrentAppointment] = useState<number>(-1);
  const setShowPopup = () => {
    setPopup(false);
  };
  const onFinish = () => {
    // Kiểm tra xem có `currentAppointment` (là id của appointment) không
    if (CurrentAppointment) {
      // Lấy `id` của appointment từ `currentAppointment`
      const appointmentId = CurrentAppointment;
  
      // Xử lý và cập nhật trạng thái của appointment với `appointmentId`
      const updatedAppointments = allAppointment.map((appointment) => {
        if (appointment.id === appointmentId) {
          return { ...appointment, status: 2 }; // Đánh dấu hoàn thành (trạng thái 2)
        }
        return appointment;
      });
      onUpdateAppointments(updatedAppointments);
  
      // Cập nhật danh sách `initialAppointments` với trạng thái mới
      // setInitialAppointments(updatedAppointments);
  
      
    }
  };
  return (
    <div>
      <h1>Appointments</h1>
      <p>Current Date: {chooseDate}</p>
      <div className="appointment-grid">
        {Appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-item">
            <div className="cell">
              <div className="start-cell">
                <h1> {dayjs(appointment.start).format("h:mm")}</h1>
              </div>
              <div className="am-pm-cell">
                <h1>{dayjs(appointment.start).format("A")}</h1>
              </div>
            </div>
            <div className="divider"></div>
            <div className="contexts">
              <div className="persons">
                <div className="id-cell">
                  <br />
                  <p>Làm giá</p>
                </div>

                <div className="employee-id-cell">
                  <br />
                  <h1>Nhân viên A</h1>
                </div>
              </div>

              <div className="status-cell">
                <br />
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
                  <button>
                    <img src={Cancel} />
                  </button>
                ) : (
                  <button>
                    <img src={Done} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {popup && (
        <div className="popup">
          <Popup setShowPopup={setShowPopup} onFinish={onFinish} />
        </div>
      )}
    </div>
  );
};

export default AppointmentListComponent;
