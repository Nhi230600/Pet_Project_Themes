import axios from "axios"; // Import Axios
import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router-dom";
import "./TimeTable.css";

const localizer = momentLocalizer(moment);
interface Appointment {
  id: number;
  start: string;
  end: string;
  title: string;
}
function TimeTable() {
  const { id } = useParams();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await axios.get(
          `http://localhost:2000/api/appointment/getByEmployeeId/${id}`
        );

        // Kiểm tra nếu yêu cầu thành công (status code 200)
        if (response.status === 200) {
          setAppointments(response.data);
          const formattedAppointments = response.data.map(
            (appointment: Appointment) => ({
              id: appointment.id,
              start: new Date(appointment.start),
              end: new Date(appointment.end),
              title: appointment.title,
            })
          );
          setAppointments(formattedAppointments);
        } else {
        }
      } catch (error) {}
    }

    fetchAppointments();
  }, []);

  const minTime = new Date(0, 0, 0, 7, 0); // 7:00 AM
  const maxTime = new Date(0, 0, 0, 17, 0); // 5:00 PM

  return (
    <div className="App">
      <h1>My Calendar App</h1>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          min={minTime}
          max={maxTime}
        />
      </div>
    </div>
  );
}

export default TimeTable;
