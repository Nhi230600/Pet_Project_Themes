import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Cancel from "images/status/cancel.png";
import Waiting from "images/status/wait.png";
import Done from "images/status/done.png";
import Nodata from "images/nodata.png";
import Popup from "./Popup";
import { toast } from "react-toastify";
import { Pagination } from "antd";
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
  allAppointment,
}) => {
  const itemsPerPage = 2;
  const [Appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);
  useEffect(() => {
    const sortedAppointments = [...initialAppointments].sort((a, b) => {
      return dayjs(a.start).isBefore(dayjs(b.start)) ? -1 : 1;
    });
    setAppointments(sortedAppointments);
  }, [initialAppointments]);

  const [popup, setPopup] = useState(false);
  const [CurrentAppointment, setCurrentAppointment] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const setShowPopup = () => {
    setPopup(false);
  };

  const onFinish = () => {
    if (CurrentAppointment) {
      const appointmentId = CurrentAppointment;

      const updatedAppointments = allAppointment.map((appointment) => {
        if (appointment.id === appointmentId) {
          return { ...appointment, status: 2 };
        }
        return appointment;
      });
      onUpdateAppointments(updatedAppointments);

      toast.success("Hủy đơn thành công");
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedAppointments = initialAppointments.slice(startIndex, endIndex);
  return (
    <div className="">
      <div className="appointment-grid">
        {displayedAppointments.length === 0 ? (
          <div className="no-data">
            <img src={Nodata} alt="No Data" />
          </div>
        ) : (
          displayedAppointments.map((appointment) => (
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
          ))
        )}
      </div>
      <div className="Pagination">
        <Pagination
          current={currentPage}
          total={initialAppointments.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
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
