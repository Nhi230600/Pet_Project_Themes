import { Avatar, Card, Typography } from "antd";
import {
  Appointment,
  Form,
  Loading,
  Pet,
  TableList,
  initialAppointments,
  petData,
} from "components";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import "./CustomerProfile.css";
import Service from "./interface/Service";
import Treatment from "./interface/Treatment";
import data from "./interface/data";
const { Title, Text } = Typography;
interface Input {
  content: string;
  description: string;
}

const ProfilePage = () => {
  const { idAppointment } = useParams();
  const [pets, setPets] = useState<Pet[]>(petData);
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [appointment, setAppointment] = useState<Appointment>();
  const navigate = useNavigate();
  const [treatments, setTreatments] = useState(data);
  const calculateTotalBill = (services: Service[]) => {
    return services.reduce((total, service) => total + service.price, 0);
  };
  const onFinish = () => {
    navigate("/employee/customer/treatment");
  };

  useEffect(() => {
    setLoading(true);
    if (idAppointment) {
      const foundAppointment = initialAppointments.find(
        (appointment) => appointment.id === parseInt(idAppointment, 10),
      );
      if (foundAppointment) setAppointment(foundAppointment);

      if (foundAppointment) {
        const foundPet = pets.find((pet) => pet.id === foundAppointment.idPet);
        if (foundPet) setPet(foundPet);
      }
    }
    setLoading(false);
  }, [idAppointment, appointment, pets]);
  useEffect(() => {
    const updatedTreatments = data.map((treatment) => {
      const totalBill = calculateTotalBill(treatment.services);
      const formattedStartDate = format(
        new Date(treatment.start),
        "MMMM d, yyyy, HH:mm a",
      );

      return {
        ...treatment,
        bill: totalBill,
        start: formattedStartDate,
      };
    });
    updatedTreatments.sort(
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime(),
    );

    setTreatments(updatedTreatments);
  }, [data]);
  if (!pet) {
    return <p>Không tìm thấy thú cưng</p>;
  }
  if (!idAppointment) {
    return <p>Không tìm thấy lịch hẹn</p>;
  }

  const writeTreatment = () => {
    navigate(`/employee/${pet.id}/createtreatmentin`);
  };
  const showPopup = () => {
    setPopup(true);
  };
  const treatment: Treatment | undefined = data.find(
    (item) => item.id === parseInt(idAppointment, 10),
  );
  if (!treatment) {
    return <p>Không tìm thấy đơn điều trị</p>;
  }
  const service: Input[] = treatment.services.map((service: Service) => ({
    content: service.name,
    description: `${service.price.toString()} $`,
  }));
  const treatmentshow: Input[] = [];
  treatmentshow.push({
    content: "Nhân viên",
    description: treatment.employeeName,
  });
  treatmentshow.push({
    content: "Ngày",

    description: format(new Date(treatment.start), "MMMM d, yyyy, HH:mm a"),
  });
  treatmentshow.push({
    content: "Thú cưng",
    description: treatment.petName,
  });
  const DetailPopup = () => {
    return (
      <div className="popup">
        <div className="treatment-containe">
          <Form input={treatmentshow} />
          <Form input={service} />
        </div>
        <div className="close-button">
          <button onClick={() => setPopup(false)}>Close</button>
        </div>
      </div>
    );
  };

  return (
    <div className="page">
      {loading ? (
        <Loading />
      ) : (
        <Card className="board">
          <div className="title">
            <h1>Hồ sơ</h1>
          </div>
          <div className="CustomerProfilePage">
            <Card className="CardProfile">
              <Avatar size={128} src={pet.image} />
              <Title level={4}>{pet.name}</Title>
              <div className="infomation">
                <Text>Species: {pet.description}</Text>
                <Text>Age: {pet.age} years old</Text>
              </div>
            </Card>
          </div>
          <TableList
            fields={["Tên nhân viên", "Ngày", "Tổng hóa đơn"]}
            rows={["employeeName", "start", "bill"]}
            tableData={treatments}
            title="List of Treatments"
            addAction={writeTreatment}
            onViewDetail={showPopup}
          />
        </Card>
      )}
      {popup && <DetailPopup />}
    </div>
  );
};

export default ProfilePage;
