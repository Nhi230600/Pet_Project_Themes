export interface Appointment {
  id: number;
  treatment: string;
  customerName: string;
  time: string;
  status: number;
  customerAvatar: string;
  idEmployee: number;
  idPet: number;
}
export default Appointment;
