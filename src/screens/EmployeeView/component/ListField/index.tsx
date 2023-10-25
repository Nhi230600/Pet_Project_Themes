import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, List, Pagination, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ListField.css";
import Appointment from "components/AppointmentConstant/Type";
import FutureAppointment from "components/FutureAppointmentConstant/Type";

interface ListFieldProps {
  appointments: Appointment[];
  futureAppointments: FutureAppointment[];
  onViewDetail: (appointment: Appointment | FutureAppointment) => void;
  onCancel: (appointment: Appointment | FutureAppointment) => void;
}

const currentDate = new Date();
const currentDateTitle = `Hôm nay, ${currentDate.toLocaleDateString()} `;
const ListField: React.FC<ListFieldProps> = ({
  appointments,
  futureAppointments,
  onViewDetail,
  onCancel,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const handleChangePage = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="title-1">
        <h4> Đơn khám {currentDateTitle}</h4>
      </div>
      <Divider />
      <List
        dataSource={appointments.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        renderItem={(item: Appointment) => (
          <Card className="custom-card">
            <List.Item
              actions={[
                <Link to="/employee/customer">
                  <Button
                    className="eye-icon"
                    shape="circle"
                    icon={<EyeOutlined />}
                  />
                </Link>,
                <Button
                  className="close-icon"
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={() => onCancel(item)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="avatar-customer"
                    src={item.customerAvatar}
                  />
                }
                description={
                  <div className="horizontal-div-container">
                    <div className="horizontal-div">
                      <span className="bold-text">{item.customerName}</span>
                    </div>
                    <div className="horizontal-div">{item.treatment}</div>
                    <div className="horizontal-div">{item.time}</div>
                    <div className="horizontal-div">
                      {item.status === 1 ? (
                        <Tag className="status-tag-pending">
                          <span> Đang chờ</span>
                        </Tag>
                      ) : item.status === 2 ? (
                        <Tag className="status-tag-completed">
                          <span> Hoàn thành</span>
                        </Tag>
                      ) : (
                        <Tag className="status-tag-canceled">
                          <span>Đã hủy</span>
                        </Tag>
                      )}
                    </div>
                  </div>
                }
              />
            </List.Item>
          </Card>
        )}
      />
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={appointments.length}
          pageSize={pageSize}
          onChange={handleChangePage}
          showSizeChanger={true}
          pageSizeOptions={["5", "10", "20"]}
        />
      </div>
      <Divider />

      <div className="title-2">
        <h4>Đơn đặt</h4>
      </div>
      <Divider />
      <List
        dataSource={futureAppointments.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )}
        renderItem={(item: FutureAppointment) => (
          <Card className="custom-card">
            <List.Item
              actions={[
                <Link to="/employee/customer">
                  <Button
                    className="eye-icon"
                    shape="circle"
                    icon={<EyeOutlined />}
                  />
                </Link>,
                <Button
                  className="close-icon"
                  shape="circle"
                  icon={<CloseOutlined />}
                  onClick={() => onCancel(item)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.customerAvatar} />}
                description={
                  <>
                    <div className="horizontal-div-container">
                      <div className="horizontal-div">
                        <span className="bold-text">{item.customerName}</span>
                      </div>
                      <div className="horizontal-div">{item.treatment}</div>
                      <div className="horizontal-div">{item.time}</div>
                      <div className="horizontal-div">{item.date}</div>
                    </div>
                  </>
                }
              />
            </List.Item>
          </Card>
        )}
      />
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          total={futureAppointments.length}
          pageSize={pageSize}
          onChange={handleChangePage}
          showSizeChanger={true}
          pageSizeOptions={["5", "10", "20"]}
        />
      </div>
    </div>
  );
};

export default ListField;
