import Treatment from "./Treatment";
const treatmentData: Treatment[] = [];

// Tạo danh sách thú cưng
const pets = [
  {
    id: 1,
    employeeName: "Nguyễn Văn A",
    petName: "Apolo",
    treatmentContent: "abcdef",
  },
  {
    id: 2,
    employeeName: "Trần Thị B",
    petName: "Gretchen",
    treatmentContent: "abcdef",
  },
  {
    id: 3,
    employeeName: "Lê Quang C",
    petName: "Pepper",
    treatmentContent: "abcdef",
  },
  {
    id: 4,
    employeeName: "Phạm Thị D",
    petName: "Daisy",
    treatmentContent: "abcdef",
  },
  {
    id: 5,
    employeeName: "Hoàng Văn E",
    petName: "Max",
    treatmentContent: "abcdef",
  },
];
let count = 1;
pets.forEach((pet) => {
  for (let i = 1; i <= 5; i++) {
    treatmentData.push({
      petName: pet.petName,
      id: count,
      idPet: pet.id,
      employeeName: pet.employeeName,
      start: "2023-10-20T10:00:00",
      services: [
        { name: "Checkup", price: 50 },
        { name: "Vaccination", price: 80 },
      ],
      treatmentContent: pet.treatmentContent,
    });
    count++;
  }
});

export default treatmentData;
