import { service } from "./serviceData";

const ServiceCard = ({ service }: { service: service }) => {
  const { src, title, main } = service;
  return (
    <div className="bg-yellow-100 rounded-md shadow-md shawdow-yellow-100 relative   ">
      <div>
        <img src={src} className="w h-3/6" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
