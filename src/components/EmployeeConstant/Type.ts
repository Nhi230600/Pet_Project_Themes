interface Employee {
    id: number;
    name: string;
    exp: number;
    gender: string;
    type: string;
    position: string;
    account: string;
    password: string;
    avatar: string;
    description: string;
    appointment: number;

}
interface Appointments{
    date: string,
    time: string,
    status: number,
    service: string,
    price: number,
}

export default Employee;