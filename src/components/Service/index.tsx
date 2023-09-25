import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <h3 className="border-b mt-12 mb-12 pb-6">List Services</h3>
      <div className="grid grid-cols-3 gap-10 mb-10">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default Service;
