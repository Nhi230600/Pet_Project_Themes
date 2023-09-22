import { service } from "./serviceData";

const ServiceCard = ({ service }: { service: service }) => {
  const { src, title, main } = service;
  return (
    <div className="bg-yellow-100 rounded-md shadow-md shawdow-yellow-100 relative ">
      <img src={src} className="w-full " />
      <div>
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
