import { LeftOutlined } from "@ant-design/icons";
import { Button, Card, PageHeader, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PetCheckupPage.css";

const { Title, Text } = Typography;

interface PetData {
  petName: string;
  birthdate: Date;
  petType: string;
  breed: string;
  lastCheckupDate: Date;
  diagnosis: string;
  nextCheckupDate: Date;
}
const PetInfoCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Card className="info-card">
      <Text strong>{title}:</Text> {content}
    </Card>
  );
};
const PetDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [petData, setPetData] = useState<PetData | null>(null);

  const fetchPetData = () => {
    const exampleData: PetData = {
      petName: "Bobby",
      birthdate: new Date("2020-01-01"),
      petType: "Chó",
      breed: "Chó vàng",
      lastCheckupDate: new Date("2023-08-15"),
      diagnosis: "Bị nấm da",
      nextCheckupDate: new Date("2023-12-15"),
    };
    setPetData(exampleData);
  };

  useEffect(() => {
    fetchPetData();
  }, []);

  return (
    <div>
      <PageHeader title="Thông tin tái khám" className="site-page-header" />
      {petData ? (
        <div>
          <PetInfoCard title="Tên thú cưng" content={petData.petName} />
          <PetInfoCard
            title="Ngày sinh"
            content={petData.birthdate.toDateString()}
          />
          <PetInfoCard title="Loại thú cưng" content={petData.petType} />
          <PetInfoCard title="Giống loài thú cưng" content={petData.breed} />
          <PetInfoCard
            title="Ngày khám gần nhất"
            content={petData.lastCheckupDate.toDateString()}
          />
          <PetInfoCard
            title="Chuẩn đoán kết quả gần nhất"
            content={petData.diagnosis}
          />
          <PetInfoCard
            title="Hẹn ngày tái khám"
            content={petData.nextCheckupDate.toDateString()}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/" className="back-button">
        <Button icon={<LeftOutlined />} type="link">
          Quay lại
        </Button>
      </Link>
    </div>
  );
};

export default PetDetailsPage;
