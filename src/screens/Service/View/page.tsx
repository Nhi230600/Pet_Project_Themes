import React, { useState, useEffect } from "react";
import { Button, Card, Col, Modal, Pagination, Row } from "antd";
import {
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "antd/dist/antd.css";
import "./ViewServicePage.css";
import { Service, serviceData } from "components";
const initialServices = serviceData;

const ViewServicePage = () => {
  const [currentServiceType, setCurrentServiceType] = useState("Spa");
  const [currentPage, setCurrentPage] = useState(1);
  const [serviceList, setServiceList] = useState<Service[]>([]);

  const pageSize = 6;

  const filteredServices = initialServices.filter(
    (service) => service.type === currentServiceType,
  );

  const paginatedServiceList = serviceList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  useEffect(() => {
    setServiceList(filteredServices);
  }, [currentServiceType]);

  const handleServiceTypeChange = (serviceType: string) => {
    setCurrentPage(1);
    setCurrentServiceType(serviceType);
  };

  const handleDeleteService = (serviceName: string, id: number) => {
    Modal.confirm({
      title: `Xác nhận xóa ${serviceName}`,
      content: `Bạn có chắc chắn muốn xóa dịch vụ "${serviceName}"?`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",

      onOk() {
        const updatedServiceList = serviceList.filter(
          (service) => service.id !== id,
        );
        setServiceList(updatedServiceList);
        const indexToRemove = serviceData.findIndex(
          (service) => service.id === id,
        );
        if (indexToRemove !== -1) {
          serviceData.splice(indexToRemove, 1);
        }
        toast.success("Xóa thành công", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
        });
        setCurrentPage(1);
      },
      onCancel() {},
    });
  };

  return (
    <div className="view-service-page">
      <Row gutter={16} justify="center">
        <Col span={8}>
          <Card title="Thêm dịch vụ" className="service-card add-service-card">
            <Link to="/admin/service/add">
              <Button icon={<PlusOutlined />} type="dashed">
                Thêm dịch vụ
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>

      <div className="service-type-buttons">
        <Button onClick={() => handleServiceTypeChange("Spa")}>Spa</Button>

        <Button onClick={() => handleServiceTypeChange("Huấn luyện")}>
          Huấn luyện
        </Button>

        <Button
          onClick={() => handleServiceTypeChange("Chăm sóc sức khỏe thú cưng")}
        >
          Chăm sóc sức khỏe thú cưng
        </Button>
      </div>

      <Row gutter={16}>
        {paginatedServiceList.map((subService) => (
          <Col span={8} key={subService.id}>
            <Card title={subService.name} className="service-card">
              <ul>
                <li>
                  <p>{subService.description}</p>
                  <p className="service-price">
                    <DollarCircleOutlined /> ${subService.price}
                  </p>

                  <div className="service-buttons">
                    <Link to={`/admin/service/${subService.id}`}>
                      <Button icon={<EditOutlined />} type="primary">
                        Chỉnh sửa
                      </Button>
                    </Link>

                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        handleDeleteService(subService.name, subService.id)
                      }
                    >
                      Xóa
                    </Button>
                  </div>
                </li>
              </ul>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={serviceList.length}
        onChange={(page) => setCurrentPage(page)}
        className="pagination"
      />

      <ToastContainer />
    </div>
  );
};

export default ViewServicePage;
