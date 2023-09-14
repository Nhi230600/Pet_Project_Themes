import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Divider, List, Button, Modal, Col, Row } from "antd";
import {
  MedicineBoxOutlined,
  EyeOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Title, Text } = Typography;

interface Treatment {
  buoiKham: string;
  ketQuaDieuTri: string;
  ghiChu: string;
  time: string;
  date: string;
}

const CustomerTreatment = () => {
  const { customerId } = useParams();
  const [popUp, setPopUp] = useState(false); // Sử dụng state `popUp` để kiểm soát việc hiển thị Modal
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );
  const ownerData = {
    name: "Nguyễn Văn A",
    dateOfBirth: "01/01/1990",
    sex: "Nam",
    createdDate: "10/01/2023",
  };
  // Dữ liệu cho thú cưng
  const petData = {
    petName: "Bobby",
    petType: "Chóa",
    petBreed: "Chó Vàng",
    treatmentHistory: [
      {
        time: "11:00 AM",
        date: "11/03/2023",
        buoiKham: "Buổi khám sáng",
        ketQuaDieuTri: "Đã điều trị xong",
        ghiChu: "Không có ghi chú",
      },
      {
        time: "02:30 PM",
        date: "12/05/2023",
        buoiKham: "Buổi khám chiều",
        ketQuaDieuTri: "Cần thêm điều trị",
        ghiChu: "Có ghi chú",
      },
      // Thêm quá trình điều trị cho thú cưng tại đây
    ],
  };

  const handleViewDetail = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setPopUp(true); // Mở Modal khi nút "Xem chi tiết" được nhấn
  };
  const handleModalCancel = () => {
    setPopUp(false); // Đóng Modal khi nút "Hủy" được nhấn
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={3}>Thông tin điều trị</Title>
      <Text strong>Ngày tạo hồ sơ: {ownerData.createdDate}</Text>
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Meta
              avatar={<UserOutlined style={{ fontSize: "48px" }} />}
              title={ownerData.name}
              description={
                <>
                  <Text strong>Ngày sinh: </Text>
                  {ownerData.dateOfBirth}
                  <br />
                  <Text strong>Giới tính: </Text>
                  {ownerData.sex}
                </>
              }
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Meta
              avatar={<MedicineBoxOutlined style={{ fontSize: "48px" }} />}
              title={petData.petName}
              description={
                <>
                  <Text strong>Loại: </Text>
                  {petData.petType}
                  <br />
                  <Text strong>Giống loại: </Text>
                  {petData.petBreed}
                </>
              }
            />
          </Card>
        </Col>
      </Row>
      <Divider />
      <div>
        <Button className="addButton" type="primary">
          <PlusCircleOutlined /> Ghi điều trị
        </Button>
      </div>
      <Divider />
      <Title level={3}>Lịch sử điều trị</Title>
      <List
        dataSource={petData.treatmentHistory} // Sử dụng lịch sử điều trị cho thú cưng
        renderItem={(item: Treatment) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => handleViewDetail(item)}
              >
                Xem chi tiết
              </Button>,
            ]}
          >
            <List.Item.Meta title={item.time} description={item.date} />
          </List.Item>
        )}
      />

      <Modal
        title="Thông tin chi tiết điều trị"
        visible={popUp} // Sử dụng state `popUp` để kiểm soát hiển thị Modal
        onCancel={handleModalCancel}
        footer={null}
      >
        {selectedTreatment ? (
          <div>
            <p>Thông tin buổi khám: {selectedTreatment.buoiKham}</p>
            <p>Kết quả điều trị: {selectedTreatment.ketQuaDieuTri}</p>
            <p>Ghi chú: {selectedTreatment.ghiChu}</p>
          </div>
        ) : (
          <p>Không có thông tin chi tiết.</p>
        )}
      </Modal>
    </div>
  );
};

export default CustomerTreatment;
