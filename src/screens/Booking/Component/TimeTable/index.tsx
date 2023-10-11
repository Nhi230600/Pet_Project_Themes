import { Button, DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BookSpa from "../../Booking";
import "./TimeTable.css";

import { Loading } from "components";

const localizer = momentLocalizer(moment);

interface Appointment {
  id: number;
  start: string;
  end: string;
  title: string;
}

function TimeTable() {
  const { id: id_employee } = useParams();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [startTime, setStartTime] = useState<Moment | null>(null);
  const [endTime, setEndTime] = useState<Moment | null>(null);
  const [view, setView] = useState("week");
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchAppointments() {
      try {
        // Replace with your actual API endpoint for fetching appointments
        const response = await axios.get(
          `https://zzzzzz-rr1t.onrender.com/api/appointment/getByEmployeeId/${id_employee}`
        );

        if (response.status === 200) {
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
          // Handle errors if necessary
        }
      } catch (error) {
        // Handle errors if necessary
      }
      setLoading(false);
    }

    fetchAppointments();
  }, [id_employee]);

  const minTime = new Date(0, 0, 0, 7, 0);
  const maxTime = new Date(0, 0, 0, 17, 0);

  const handleSelectDate = (date: Moment | null) => {
    setSelectedDate(date);
    setView("day");
  };

  const handleStartTimeChange = (time: Moment | null) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time: Moment | null) => {
    setEndTime(time);
  };

  const handleViewChange = (newView: string) => {
    setView(newView);
  };
  const performAPICheckAndPost = async () => {
    if (selectedDate && startTime && endTime) {
      // Extract year, month, and date from selectedDate
      const year = selectedDate.year();
      const month = selectedDate.month();
      const date = selectedDate.date();

      // Create startDateTime using year, month, date, startTime
      const startDateTime = moment()
        .year(year)
        .month(month)
        .date(date)
        .hour(startTime.hour())
        .minute(startTime.minute());

      // Create endDateTime using year, month, date, endTime
      const endDateTime = moment()
        .year(year)
        .month(month)
        .date(date)
        .hour(endTime.hour())
        .minute(endTime.minute());

      const postData = {
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        id_employee: id_employee,
      };

      setLoading(true);

      try {
        // Perform API check here, replace 'your-check-api-url' with your actual check API URL
        const checkResponse = await axios.post(
          "https://zzzzzz-rr1t.onrender.com/api/appointment/checkslot",
          postData
        );

        if (checkResponse.data.success) {
          // If the check is successful, then show the modal
          setPopup(true);
        } else {
          toast.error(checkResponse.data.message);
        }
        setLoading(false);
      } catch (error) {
        toast.error("xsxs");
      }
    } else {
      toast.error("Please pick time");
    }
  };

  const handleOpenTextForm = () => {
    performAPICheckAndPost();
  };

  const handleCloseTextForm = () => {
    setPopup(false); // Close the popup
  };

  const handleTextFormSubmit = (values: any) => {
    const submittedText = values.text;
    console.log("Submitted Text:", submittedText);
    handleCloseTextForm();
  };

  return (
    <div className="">
      <h1>My Calendar App</h1>
      {loading && <Loading />}
      <div className="date-picker">
        <div className="date-picker-container">
          <DatePicker value={selectedDate} onChange={handleSelectDate} />
        </div>
        <div className="form-group">
          <label>Thời Gian Bắt Đầu:</label>
          <TimePicker
            value={startTime}
            onChange={handleStartTimeChange}
            format="HH:mm"
            allowClear={false}
          />
        </div>

        <div className="form-group">
          <label>Thời Gian Kết Thúc:</label>
          <TimePicker
            value={endTime}
            onChange={handleEndTimeChange}
            format="HH:mm"
            allowClear={false}
          />
        </div>

        <Button type="primary" onClick={handleOpenTextForm}>
          Mở Form Nhập Text
        </Button>
      </div>

      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          view={view}
          date={selectedDate}
          onView={handleViewChange}
        />
      </div>

      {popup && (
        <div className="book-form-action">
          <BookSpa onClose={handleCloseTextForm} />
        </div>
      )}
    </div>
  );
}

export default TimeTable;
