import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

const Service = () => {
  return (
    <>
      <div className="listservice-container">
        <div className="listservice-container-title">
          <span className="listservice-container-title-1">List Service</span>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-10">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
