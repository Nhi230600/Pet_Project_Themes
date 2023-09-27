import { ArrowUpOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Table } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./DashboardPage.css";

interface Employee {
  name: string;
  appointments: number;
  category: string;
}

interface Customer {
  name: string;
  appointments: number;
}

const DashboardPage = () => {
  const [data, setData] = useState<{
    appointmentsToday: number;
    revenueToday: number;
    totalCustomers: number;
    totalEmployees: number;
    topEmployeesSpa: Employee[];
    topEmployeesDoctor: Employee[];
    topEmployeesTrainer: Employee[];
    topCustomers: Customer[];
  }>({
    appointmentsToday: 0,
    revenueToday: 0,
    totalCustomers: 0,
    totalEmployees: 0,
    topEmployeesSpa: [],
    topEmployeesDoctor: [],
    topEmployeesTrainer: [],
    topCustomers: [],
  });

  useEffect(() => {
    setTimeout(() => {
      const employees: Employee[] = [
        { name: "Spa Employee 1", appointments: 15, category: "Spa" },
        { name: "Spa Employee 2", appointments: 12, category: "Spa" },
        { name: "Doctor Employee 1", appointments: 18, category: "Bác sĩ" },
        { name: "Doctor Employee 2", appointments: 14, category: "Bác sĩ" },
        {
          name: "Trainer Employee 1",
          appointments: 20,
          category: "Huấn luyện viên",
        },
        {
          name: "Trainer Employee 2",
          appointments: 16,
          category: "Huấn luyện viên",
        },
      ];

      const customers: Customer[] = [
        { name: "Customer 1", appointments: 8 },
        { name: "Customer 2", appointments: 6 },
        { name: "Customer 3", appointments: 5 },
        { name: "Customer 4", appointments: 7 },
      ];

      setData({
        appointmentsToday: 10,
        revenueToday: 1000,
        totalCustomers: 50,
        totalEmployees: 20,
        topEmployeesSpa: employees.filter(
          (employee) => employee.category === "Spa"
        ),
        topEmployeesDoctor: employees.filter(
          (employee) => employee.category === "Bác sĩ"
        ),
        topEmployeesTrainer: employees.filter(
          (employee) => employee.category === "Huấn luyện viên"
        ),
        topCustomers: customers,
      });
    }, 1000);
  }, []);

  return (
    <div className="dashboard-page">
      <Row gutter={16}>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Đơn đặt lịch hôm nay"
              value={data.appointmentsToday}
            />
            <ArrowUpOutlined className="green-icon" />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic title="Doanh thu hôm nay" value={data.revenueToday} />
            <ArrowUpOutlined className="green-icon" />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Tổng số tài khoản khách hàng"
              value={data.totalCustomers}
            />
            <UserOutlined className="blue-icon" />
          </Card>
        </Col>
        <Col span={6}>
          <Card className="dashboard-card">
            <Statistic
              title="Tổng số tài khoản nhân viên"
              value={data.totalEmployees}
            />
            <UserOutlined className="blue-icon" />
          </Card>
        </Col>
      </Row>

      <Card title="Top nhân viên">
        <Row gutter={16}>
          <Col span={8}>
            <Table
              dataSource={data.topEmployeesSpa}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointments",
                  key: "appointments",
                },
              ]}
            />
          </Col>
          <Col span={8}>
            <Table
              dataSource={data.topEmployeesDoctor}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointments",
                  key: "appointments",
                },
              ]}
            />
          </Col>
          <Col span={8}>
            <Table
              dataSource={data.topEmployeesTrainer}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointments",
                  key: "appointments",
                },
              ]}
            />
          </Col>
        </Row>
      </Card>

      <Card title="Top khách hàng có số đơn đặt lịch nhiều nhất">
        <Table
          dataSource={data.topCustomers}
          columns={[
            {
              title: "Khách hàng",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Số đơn đặt lịch",
              dataIndex: "appointments",
              key: "appointments",
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default DashboardPage;
