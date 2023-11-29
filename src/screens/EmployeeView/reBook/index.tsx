import { Button, Card } from "antd";
import rebookData from "components/RebookConstant";
import { Link, useParams } from "react-router-dom";

const RebookPage = () => {
  const { idPet } = useParams();
  return (
    <div className="rebook-page">
      <h2>Danh sách lịch tái khám</h2>
      {rebookData.map((appointment) => (
        <Card
          key={appointment.id}
          title={`Pet ${appointment.id}`}
          style={{ width: 300, margin: "16px" }}
        >
          <img
            alt={`Pet ${appointment.id}`}
            src={appointment.image}
            style={{ width: "100%", height: "auto" }}
          />
          <p>Age: {appointment.age} years</p>
          <p>Gender: {appointment.gender}</p>
          <p>Examination Date: {appointment.exadate}</p>
          <p>Diagnosis: {appointment.diagnosis}</p>
          <p>Reexamination Date: {appointment.reexa}</p>
        </Card>
      ))}
      <Link to="/employee">
        <Button type="primary">Quay lại trang nhân viên</Button>
      </Link>
    </div>
  );
};

export default RebookPage;
