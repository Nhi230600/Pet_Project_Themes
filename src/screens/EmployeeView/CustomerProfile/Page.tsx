import { Avatar, Card, List, Pagination, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./CustomerProfile.css";
import { useParams } from "react-router-dom";
const { Title, Text } = Typography;

const animalData = {
  avatar: "",
  name: "Fido",
  species: "Dog",
  age: 3,
  treatments: [
    { name: "Vaccination", details: "Vaccination details..." },
    { name: "Flea Control", details: "Flea Control details..." },
    { name: "Deworming", details: "Deworming details..." },
    { name: "Vaccination", details: "Vaccination details..." },
    { name: "Flea Control", details: "Flea Control details..." },
    { name: "Deworming", details: "Deworming details..." },
    { name: "Vaccination", details: "Vaccination details..." },
    { name: "Flea Control", details: "Flea Control details..." },
    { name: "Deworming", details: "Deworming details..." },
    { name: "Vaccination", details: "Vaccination details..." },
    { name: "Flea Control", details: "Flea Control details..." },
    { name: "Deworming", details: "Deworming details..." },
  ],
};

const ProfilePage = () => {
  const { idAppointment } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const onFinish = () => {
    navigate("/employee/customer/treatment");
  };
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const treatmentsToDisplay = animalData.treatments.slice(startIndex, endIndex);

  return (
    <div className="page">
      <Card className="board">
        <div className="title">
          <h1>Hồ sơ</h1>
        </div>
        <div className="CustomerProfilePage">
          <Card className="CardProfile">
            <Avatar size={128} src={animalData.avatar} />
            <Title level={4}>{animalData.name}</Title>
            <div className="infomation">
              <Text>Species: {animalData.species}</Text>
              <Text>Age: {animalData.age} years old</Text>
            </div>
          </Card>
          <Card className="Treatments">
            <Title level={4}>Treatments</Title>
            <List
              dataSource={treatmentsToDisplay}
              renderItem={(item) => (
                <List.Item className="treatment-item">
                  <Text>{item.name}</Text>
                  <a onClick={onFinish}>View Details</a>
                </List.Item>
              )}
            />
            <Pagination
              current={currentPage}
              total={animalData.treatments.length}
              pageSize={itemsPerPage}
              onChange={onPageChange}
            />
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
