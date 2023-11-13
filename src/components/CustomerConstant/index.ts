import Customer from "./Type";

const CustomerData: Customer[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Customer${index + 1}`,
  account: `customer${index + 1}`,
  password: `password${index + 1}`,
  phone: `+84....${index + 1}`,
  address: `ở đâu không biết nữa ${index + 1}`,
  appointments: Math.floor(Math.random() * 100),
  avatar: `https://picsum.photos/${Math.floor(Math.random() * 900) + 100}`,
}));

export default CustomerData;
