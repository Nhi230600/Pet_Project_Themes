import Service from "./Service";
interface Treatment {
  id: number;
  idPet: number;
  employeeName: string;
  start: string;
  services: Service[];
  petName: string;
  treatmentContent: string;
}
export default Treatment;
