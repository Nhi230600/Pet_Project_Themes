import React from "react";
import { List, Button } from "antd";

interface Shift {
  date: string;
  time: string;
  status: number;
}

interface ShiftsOfDayProps {
  shifts: Shift[];
  onStatusChange: (index: number) => void;
  selectedDate: string | null;
}

const ShiftsOfDay: React.FC<ShiftsOfDayProps> = ({
  shifts,
  onStatusChange,
  selectedDate,
}) => {
  const filteredShifts = shifts.filter((shift) => shift.date === selectedDate);
  return (
    <List
      dataSource={filteredShifts}
      renderItem={(shift, index) => (
        <Button
          key={index}
          className={`shift-button ${
            shift.status === 1 ? "green-status" : "gray-status"
          }`}
          onClick={() => onStatusChange(index)}
        >
          {shift.time}
        </Button>
      )}
    />
  );
};

export default ShiftsOfDay;
