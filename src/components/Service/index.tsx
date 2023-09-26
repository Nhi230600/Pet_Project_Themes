import ServiceCard from "./ServiceCard";
import "./service.css";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className=" text-center p-4 " data-aos="fade-down">
        <h3 className="border-b mt-12 mb-12 pb-6 text-5xl">List Services</h3>
      </div>
      <div className="flex flex-wrap justify-around group my-16">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default Service;
