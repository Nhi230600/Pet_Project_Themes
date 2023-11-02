import Treatment from "./Treatment";
const treatmentData: Treatment[] = [];

// Tạo danh sách thú cưng
const pets = [
  { id: 1, employeeName: "Nguyễn Văn A", name: "Apolo" },
  { id: 2, employeeName: "Trần Thị B",  name: "Gretchen"  },
  { id: 3, employeeName: "Lê Quang C",  name: "Pepper"},
  { id: 4, employeeName: "Phạm Thị D" ,name: "Daisy"},
  { id: 5, employeeName: "Hoàng Văn E",name: "Max" },
];

// Thêm 5 đối tượng "Treatment" cho mỗi thú cưng
let count = 1;
pets.forEach((pet) => {

  for (let i = 1; i <= 5; i++) {
    treatmentData.push({
      name: pet.name,
      id: count,
      idPet: pet.id,
      employeeName: pet.employeeName,
      start: "2023-10-20T10:00:00",
      services: [
        { name: "Checkup", price: 50 },
        { name: "Vaccination", price: 80 },
      ],
    });
    count ++;
  }
});

export default treatmentData;
