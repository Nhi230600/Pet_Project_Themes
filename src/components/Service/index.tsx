import ServiceCard from "./ServiceCard";
import "./service.css";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className=" text-center p-4">
        <h3 className="mbr-section-title mbr-bold pb-5 align-center mbr-fonts-style display-2">
          Dịch vụ
        </h3>
      </div>
      <div className="flex justify-around group my-9">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default Service;
