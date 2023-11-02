import { Nav, TableList } from "components";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "./interface/Service";
import data from "./interface/data";

const Treatments: React.FC = () => {
  const navigate = useNavigate();
  const [treatments, setTreatments] = useState(data);
  const calculateTotalBill = (services: Service[]) => {
    return services.reduce((total, service) => total + service.price, 0);
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    const updatedTreatments = data.map((treatment) => {
      const totalBill = calculateTotalBill(treatment.services);
      const formattedStartDate = format(
        new Date(treatment.start),
        "MMMM d, yyyy, HH:mm a"
      );

      return {
        ...treatment,
        bill: totalBill,
        start: formattedStartDate,
      };
    });
    updatedTreatments.sort(
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
    );

    setTreatments(updatedTreatments);
  }, [data]);
  const booking = () => {
    navigate("/booking");
  };

  return (
    <div>
      <Nav />
      <h1>Danh sách các điều trị</h1>
      <TableList
        fields={["Tên nhân viên", "Ngày", "Tổng hóa đơn"]}
        rows={["employeeName", "start", "bill"]}
        tableData={treatments}
        title="List of Treatments"
        addAction={booking}
      />
      <div className="back-button-profile-container">
        <button onClick={handleBackButtonClick} className="back-button-profile">
          &#8592;
        </button>
      </div>
    </div>
  );
};

export default Treatments;
