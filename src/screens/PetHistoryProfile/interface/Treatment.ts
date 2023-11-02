import Service from "./Service";
interface Treatment {
  id: number;
  idPet: number;
  employeeName: string;
  start: string;
  services: Service[];
  name: string,
}
export default Treatment;
