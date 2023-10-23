import { DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { ButtonDog, EmployeeData, Loading, Nav } from "components";
import Employee from "components/EmployeeConstant/Type";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BookSpa from "../../Booking";
import "./TimeTable.css";
const localizer = momentLocalizer(moment);

interface Appointment {
  id: number;
  start: string;
  end: string;
  status: number;
  title: string;
}

function TimeTable() {
  const { id: id_employee } = useParams();
  const accountJson = sessionStorage.getItem("account");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [checkadd, setCheckadd] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [startTime, setStartTime] = useState<Moment | null>(null);
  const [endTime, setEndTime] = useState<Moment | null>(null);
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [view, setView] = useState("week");
  const [popup, setPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(EmployeeData);
  const [employee, setEmployee] = useState<Employee>({
    id: 0,
    name: "",
    exp: 0,
    gender: "",
    type: "",
    position: "",
    account: "",
    password: "",
    avatar: "",
    description: "",
    appointment: 0,
  });
  useEffect(() => {
    setLoading(true);
    async function fetchAppointments() {
      try {
        const response = await axios.get(
          `https://zzzzzz-rr1t.onrender.com/api/appointment/getByEmployeeId/${id_employee}`
        );

        if (response.status === 200) {
          const formattedAppointments = response.data.map(
            (appointment: Appointment) => ({
              id: appointment.id,
              start: new Date(appointment.start),
              end: new Date(appointment.end),
              status: appointment.status,
              title: appointment.title,
            })
          );
          setAppointments(formattedAppointments);
        } else {
        }
      } catch (error) {}
      setLoading(false);
    }

    fetchAppointments();
  }, [id_employee]);
  useEffect(() => {
    setLoading(true);
    async function fetchAppointments() {
      try {
        const response = await axios.get(
          `https://zzzzzz-rr1t.onrender.com/api/appointment/getByEmployeeId/${id_employee}`
        );
        if (response.status === 200) {
          const formattedAppointments = response.data.map(
            (appointment: Appointment) => ({
              id: appointment.id,
              start: new Date(appointment.start),
              end: new Date(appointment.end),
              status: appointment.status,
              title: appointment.title,
            })
          );
          setAppointments(formattedAppointments);
        } else {
        }
      } catch (error) {}
      setLoading(false);
    }

    fetchAppointments();
  }, [checkadd]);

  useEffect(() => {
    if (id_employee) {
      const foundEmployee = employees.find(
        (emp) => emp.id === parseInt(id_employee, 10)
      );

      if (foundEmployee) {
        setEmployee(foundEmployee);
      }
    }
  }, [id_employee, employees]);

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
      const year = selectedDate.year();
      const month = selectedDate.month();
      const date = selectedDate.date();

      const startDateTime = moment()
        .year(year)
        .month(month)
        .date(date)
        .hour(startTime.hour())
        .minute(startTime.minute());

      const endDateTime = moment()
        .year(year)
        .month(month)
        .date(date)
        .hour(endTime.hour())
        .minute(endTime.minute());

      setStartDateTime(() => startDateTime.toISOString());
      setEndDateTime(() => endDateTime.toISOString());
      const postData = {
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        id_employee: id_employee,
      };
      if (!accountJson) {
        toast.error("Vui lòng đăng nhập!!!");
      } else {
        setLoading(true);

        try {
          const checkResponse = await axios.post(
            "https://zzzzzz-rr1t.onrender.com/api/appointment/checkslot",
            postData
          );

          if (checkResponse.data.success) {
            setPopup(true);
          } else {
            toast.error(checkResponse.data.message);
          }
          setLoading(false);
        } catch (error) {
          toast.error("Lỗi!!!");
        }
      }
    } else {
      toast.error("Vui lòng chọn thời gian!!!");
    }
  };

  const handleOpenTextForm = () => {
    performAPICheckAndPost();
  };

  const handleCloseTextForm = () => {
    setPopup(false); //Đóng popup
  };

  const handleTextFormSubmit = (values: any) => {
    const submittedText = values.text;
    console.log("Submitted Text:", submittedText);
    handleCloseTextForm();
  };

  return (
    <div className="">
      <Nav />
      {loading && <Loading />}
      <div className="date-picker">
        <div className="date-picker-container">
          <DatePicker
            size="large"
            value={selectedDate}
            onChange={handleSelectDate}
          />
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

        <ButtonDog content="Đặt lịch" onClick={performAPICheckAndPost} />
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
          className="custom-calendar"
          eventPropGetter={(event: Appointment) => ({
            className: `event-status-${event.status}`,
          })}
        />
      </div>

      {popup && (
        <div className="book-form-action">
          <BookSpa
            onClose={handleCloseTextForm}
            employee={employee}
            start={startDateTime}
            end={endDateTime}
            setCheckadd={setCheckadd}
            checkadd={checkadd}
            setPopup={setPopup}
          />
        </div>
      )}
    </div>
  );
}
export default TimeTable;
