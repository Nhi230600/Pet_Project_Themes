import { ArrowUpOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, Table } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./DashboardPage.css";
import { Employee, EmployeeData, CustomerData, Customer } from "components";

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
      const employees = EmployeeData;

      const customers = CustomerData;

      setData({
        appointmentsToday: 10,
        revenueToday: 1000,
        totalCustomers: customers.length,
        totalEmployees: employees.length,
        topEmployeesSpa: employees
          .filter((employee) => employee.position === "Spa")
          .sort((a, b) => b.appointment - a.appointment),

        topEmployeesDoctor: employees
          .filter((employee) => employee.position === "Bác sĩ")
          .sort((a, b) => b.appointment - a.appointment),
        topEmployeesTrainer: employees
          .filter((employee) => employee.position === "Huấn luyện viên")
          .sort((a, b) => b.appointment - a.appointment),
        topCustomers: customers.sort((a, b) => b.appointments - a.appointments),
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
            Nhân viên chăm sóc
            <Table
              dataSource={data.topEmployeesSpa.slice(0, 3)}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointment",
                  key: "appointments",
                },
              ]}
              pagination={false}
            />
          </Col>
          <Col span={8}>
            Bác Xĩ
            <Table
              dataSource={data.topEmployeesDoctor.slice(0, 3)}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointment",
                  key: "appointments",
                },
              ]}
              pagination={false}
            />
          </Col>
          <Col span={8}>
            Huấn luyện
            <Table
              dataSource={data.topEmployeesTrainer.slice(0, 3)}
              columns={[
                {
                  title: "Nhân viên",
                  dataIndex: "name",
                  key: "name",
                },
                {
                  title: "Số đơn đặt lịch",
                  dataIndex: "appointment",
                  key: "appointments",
                },
              ]}
              pagination={false}
            />
          </Col>
        </Row>
      </Card>

      <Card title="Top khách hàng có số đơn đặt lịch nhiều nhất">
        <Table
          dataSource={data.topCustomers.slice(0, 3)}
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
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default DashboardPage;
