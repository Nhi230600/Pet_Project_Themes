import { useState } from "react";

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

const initialServices: Record<
  string,
  { name: string; description: string; price: number }[]
> = {
  Spa: [
    {
      name: "Tỉa lông",
      description: "Dịch vụ tỉa lông cho thú cưng.",
      price: 30,
    },

    {
      name: "Tắm rửa",
      description: "Dịch vụ tắm rửa cho thú cưng.",
      price: 25,
    },

    {
      name: "Massage",
      description: "Dịch vụ massage cho thú cưng.",
      price: 40,
    },

    {
      name: "Manicure và Pedicure",
      description: "Dịch vụ manicure và pedicure cho thú cưng.",
      price: 35,
    },

    {
      name: "Nhuộm lông",
      description: "Dịch vụ nhuộm lông cho thú cưng.",
      price: 50,
    },

    // Thêm các dịch vụ con khác tại đây
  ],

  "Huấn luyện": [
    {
      name: "Khóa học cơ bản",
      description: "Khóa học huấn luyện cơ bản cho thú cưng.",
      price: 50,
    },

    {
      name: "Khóa học nâng cao",
      description: "Khóa học huấn luyện nâng cao cho thú cưng.",
      price: 75,
    },

    {
      name: "Khóa học chó sủa",
      description: "Khóa học huấn luyện cho thú cưng sủa nhiều.",
      price: 60,
    },

    {
      name: "Khóa học chó con",
      description: "Khóa học huấn luyện cho chó con.",
      price: 45,
    },

    {
      name: "Khóa học chó lớn",
      description: "Khóa học huấn luyện cho chó lớn.",
      price: 70,
    },

    // Thêm các dịch vụ con khác tại đây
  ],

  "Chăm sóc sức khỏe thú cưng": [
    {
      name: "Kiểm tra sức khỏe định kỳ",
      description: "Kiểm tra sức khỏe định kỳ cho thú cưng.",
      price: 40,
    },

    {
      name: "Chăm sóc y tế",
      description: "Dịch vụ chăm sóc y tế cho thú cưng.",
      price: 60,
    },

    {
      name: "Phòng ngừa bệnh",
      description: "Dịch vụ phòng ngừa bệnh cho thú cưng.",
      price: 55,
    },

    {
      name: "Tiêm phòng",
      description: "Dịch vụ tiêm phòng cho thú cưng.",
      price: 45,
    },

    {
      name: "Xét nghiệm máu",
      description: "Dịch vụ xét nghiệm máu cho thú cưng.",
      price: 65,
    },

    // Thêm các dịch vụ con khác tại đây
  ],
};

const ViewServicePage = () => {
  const [currentServiceType, setCurrentServiceType] = useState("Spa");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 9;

  const serviceList = initialServices[currentServiceType];

  const totalPages = Math.ceil(serviceList.length / pageSize);

  const handleServiceTypeChange = (serviceType: any) => {
    setCurrentServiceType(serviceType);

    setCurrentPage(1);
  };

  const handleDeleteService = (serviceName: any) => {
    Modal.confirm({
      title: `Xác nhận xóa ${serviceName}`,

      content: `Bạn có chắc chắn muốn xóa dịch vụ "${serviceName}"?`,

      okText: "Xóa",

      okType: "danger",

      cancelText: "Hủy",

      onOk() {
        const updatedServiceList = {
          ...initialServices,

          [currentServiceType]: initialServices[currentServiceType].filter(
            (subService) => subService.name !== serviceName
          ),
        };

        toast.success("Xóa thành công", {
          position: toast.POSITION.TOP_CENTER,

          autoClose: 2000,

          hideProgressBar: true,
        });

        setCurrentPage(1);

        initialServices[currentServiceType] =
          updatedServiceList[currentServiceType];
      },

      onCancel() {},
    });
  };

  const paginatedServiceList = serviceList.slice(
    (currentPage - 1) * pageSize,

    currentPage * pageSize
  );

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
        <Button
          type={currentServiceType === "Spa" ? "primary" : "default"}
          onClick={() => handleServiceTypeChange("Spa")}
        >
          Spa
        </Button>

        <Button
          type={currentServiceType === "Huấn luyện" ? "primary" : "default"}
          onClick={() => handleServiceTypeChange("Huấn luyện")}
        >
          Huấn luyện
        </Button>

        <Button
          type={
            currentServiceType === "Chăm sóc sức khỏe thú cưng"
              ? "primary"
              : "default"
          }
          onClick={() => handleServiceTypeChange("Chăm sóc sức khỏe thú cưng")}
        >
          Chăm sóc sức khỏe thú cưng
        </Button>
      </div>

      <Row gutter={16}>
        {paginatedServiceList.map((subService) => (
          <Col span={8} key={subService.name}>
            <Card title={subService.name} className="service-card">
              <ul>
                <li>
                  <p>{subService.description}</p>

                  <p className="service-price">
                    <DollarCircleOutlined /> ${subService.price}
                  </p>

                  <div className="service-buttons">
                    <Link to="/admin/service/edit">
                      <Button icon={<EditOutlined />} type="primary">
                        Chỉnh sửa
                      </Button>
                    </Link>

                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      onClick={() => handleDeleteService(subService.name)}
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
