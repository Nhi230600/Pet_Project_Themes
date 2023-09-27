import { Card, DatePicker, Pagination, Table, Tag } from "antd";
import "antd/dist/antd.css";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import "./EmployeeSchedulePage.css";

const { RangePicker } = DatePicker;

const EmployeeSchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());

  interface Employee {
    employee: string;
    slots: Slot[];
  }

  interface Slot {
    time: string;
    customer: string;
    service: string;
    status: number;
  }

  const scheduleData = [
    {
      employee: "Nhân viên A",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của A",
          service: "Dịch vụ A",
          status: 1,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của A",
          service: "Dịch vụ B",
          status: 2,
        },
      ],
    },
    {
      employee: "Nhân viên B",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của B",
          service: "Dịch vụ C",
          status: 3,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của B",
          service: "Dịch vụ D",
          status: 1,
        },
      ],
    },
    {
      employee: "Nhân viên B",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của B",
          service: "Dịch vụ C",
          status: 3,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của B",
          service: "Dịch vụ D",
          status: 1,
        },
      ],
    },
    {
      employee: "Nhân viên B",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của B",
          service: "Dịch vụ C",
          status: 3,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của B",
          service: "Dịch vụ D",
          status: 1,
        },
      ],
    },

    {
      employee: "Nhân viên B",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của B",
          service: "Dịch vụ C",
          status: 3,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của B",
          service: "Dịch vụ D",
          status: 1,
        },
      ],
    },
    {
      employee: "Nhân viên B",
      slots: [
        {
          time: "2023-09-07T00:00:00",
          customer: "Khách hàng Ngày 7/9 của B",
          service: "Dịch vụ C",
          status: 3,
        },
        {
          time: "2023-09-08T00:00:00",
          customer: "Khách hàng Ngày 8/9 của B",
          service: "Dịch vụ D",
          status: 1,
        },
      ],
    },
  ];

  const timeSlots = ["00:00", "01:00", "03:00", "04:00"];

  const [currentEmployees, setCurrentEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const employeesPerPage = 5;
  const totalEmployees = scheduleData.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    const employeesToDisplay = scheduleData.slice(startIndex, endIndex);
    setCurrentEmployees(employeesToDisplay);
  }, [currentPage]);

  const filteredSlots = scheduleData.flatMap((item) => {
    const filteredByDate = item.slots.filter(
      (slot) =>
        moment(slot.time).isSame(selectedDate, "day") &&
        moment(slot.time).isSameOrBefore(selectedDate.clone().add(1, "hour"))
    );

    const filteredByTime = timeSlots.map((timeSlot) => {
      const slotData = filteredByDate.find(
        (slot) => moment(slot.time).format("HH:mm") === timeSlot
      );

      return slotData
        ? {
            customer: slotData.customer,
            service: slotData.service,
            status: slotData.status,
          }
        : {
            customer: "",
            service: "",
            status: 0,
          };
    });

    return {
      employee: item.employee,
      slots: filteredByTime,
    };
  });

  const columns = [
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
      fixed: "left",
    },
    ...currentEmployees.map((item) => ({
      title: item.employee,
      dataIndex: `employee_${item.employee}`,
      key: `employee_${item.employee}`,
      render: (text: Slot) => (
        <div>
          <Card className="slot-card">
            {text.status ? (
              <div>
                <Tag
                  color={
                    text.status === 1
                      ? "green"
                      : text.status === 2
                      ? "yellow"
                      : text.status === 3
                      ? "red"
                      : "gray"
                  }
                >
                  {text.customer}
                </Tag>
                <Tag>{text.service}</Tag>
              </div>
            ) : (
              <Tag color="gray">Trống</Tag>
            )}
          </Card>
        </div>
      ),
    })),
  ];

  type DataItem = Record<string, any>;

  const tableData: DataItem[] = timeSlots.map((timeSlot, index) => {
    const data: DataItem = { time: timeSlot };
    filteredSlots.forEach((item) => {
      data[`employee_${item.employee}`] = item.slots[index];
    });
    return data;
  });

  return (
    <div>
      <h1>Lịch làm việc của nhân viên</h1>
      <div className="date-picker-container">
        <DatePicker
          onChange={(date) => {
            if (date) {
              setSelectedDate(date);
            }
          }}
          placeholder="Chọn ngày"
          defaultValue={selectedDate}
        />
      </div>
      {selectedDate && (
        <Table
          dataSource={tableData}
          columns={columns as any}
          bordered
          pagination={false}
        />
      )}
      <Pagination
        current={currentPage}
        total={totalEmployees}
        pageSize={employeesPerPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default EmployeeSchedulePage;
