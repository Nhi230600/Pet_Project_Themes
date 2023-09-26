import { service } from "./serviceData";
import Button from "components/Button";

const ServiceCard = ({ service }: { service: service }) => {
  const { src, title, main } = service;
  return (
    <div className="max-w-xs bg-gray-50 rounded overflow-hidden shadow-md transition-transform transform hover:scale-110">
      <img className="w-full h-64 m-auto" src={src} alt="Placeholder" />
      <div className="px-6 py-4  h-56      justify-center">
        <div className="font-bold text-3xl text-center  mb-2 ">{title}</div>
        <p className="text-gray-700 text-base">{main}</p>
      </div>
      <div className="px-6 py-4 flex justify-center ">
        <Button btnName="VIEW MORE" btnWidth="30" btnHeight="100" />
      </div>
    </div>
  );
};

export default ServiceCard;
