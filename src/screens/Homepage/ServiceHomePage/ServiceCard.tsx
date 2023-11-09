import Button from "components/Button";
import "./Service.css";
import { service } from "./serviceData";
const ServiceCard = ({ service }: { service: service }) => {
  const { src, title, main } = service;
  return (
    <div className="service-container-card">
      <div className="service-card-image-container">
        <img className="service-card-image" src={src} alt="img_service" />
      </div>

      <div className="service-content-card">
        <div>{title}</div>
        <p>{main}</p>
      </div>

      <div className="service-card-button">
        <Button btnName="VIEW MORE" btnWidth="30" btnHeight="100" />
      </div>
    </div>
  );
};

export default ServiceCard;
