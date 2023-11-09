import ServiceCard from "./ServiceCard";
import "./Service.css";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <div className="service-container-all">
      <div className="tag-service-container">
        <h1>Dịch vụ</h1>
      </div>
      <div className="content-service">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
