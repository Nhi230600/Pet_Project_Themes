import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className=" text-center p-4">
        <h3 className="border-b mt-12 mb-12 pb-6 text-5xl">List Services</h3>
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
