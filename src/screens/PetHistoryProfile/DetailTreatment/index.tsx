import React from "react";
import data from "../interface/data";
import { useParams, useNavigate } from "react-router-dom";
import Treatment from "../interface/Treatment";
import Service from "../interface/Service";
import { Form, Nav } from "components";
import "./DetailTreatment.css";
import { format } from "date-fns";

interface Input {
  content: string;
  description: string;
}

const DetailTreatment: React.FC = () => {
  const navigate = useNavigate();
  const { id, petId } = useParams<{ id: string; petId: string }>();
  if (!id || !petId) {
    return <div>Thiếu thông tin ID hoặc Pet ID.</div>;
  }

  const treatment: Treatment | undefined = data.find(
    (item) => item.id === parseInt(id, 10),
  );

  if (!treatment) {
    return <div>Treatment không tồn tại.</div>;
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
    description: treatment.name,
  });
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <Nav />
      <h1>Lịch sử điều trị</h1>
      <div className="treatment-container">
        <Form input={treatmentshow} />
        <Form input={service} />
      </div>
      <div className="back-button-profile-container">
        <button onClick={handleBackButtonClick} className="back-button-profile">
          &#8592;
        </button>
      </div>
    </div>
  );
};

export default DetailTreatment;
