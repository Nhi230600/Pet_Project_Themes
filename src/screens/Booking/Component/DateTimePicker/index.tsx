import React, { useState } from 'react';
import { DatePicker, TimePicker, Button } from 'antd';
import 'antd/dist/antd.css';
import moment, { Moment } from 'moment';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);
  const [startTime, setStartTime] = useState<Moment | null>(null);
  const [endTime, setEndTime] = useState<Moment | null>(null);

  const handleDateChange = (date: Moment | null) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (time: Moment | null) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time: Moment | null) => {
    setEndTime(time);
  };

  const handleSubmit = () => {
    if (selectedDate && startTime && endTime) {
      const startDateTime = moment(selectedDate)
        .set({ hour: startTime.hour(), minute: startTime.minute() });
      const endDateTime = moment(selectedDate)
        .set({ hour: endTime.hour(), minute: endTime.minute() });

      console.log('Thời gian bắt đầu:', startDateTime.format('YYYY-MM-DD HH:mm:ss'));
      console.log('Thời gian kết thúc:', endDateTime.format('YYYY-MM-DD HH:mm:ss'));
    } else {
      console.log('Vui lòng chọn ngày và thời gian.');
    }
  };

  return (
    <div>
      <h2>Chọn Ngày và Thời Gian</h2>

      <div className="form-group">
        <label>Chọn Ngày:</label>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          allowClear={false}
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

      <Button type="primary" onClick={handleSubmit}>
        Xác nhận
      </Button>
    </div>
  );
}

export default DateTimePicker;
