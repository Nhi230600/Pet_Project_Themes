import Treatment from "./Treatment";
const treatmentData: Treatment[] = [];

// Tạo danh sách thú cưng
const pets = [
  { id: 1, employeeName: "Nguyễn Văn A" },
  { id: 2, employeeName: "Trần Thị B" },
  { id: 3, employeeName: "Lê Quang C" },
  { id: 4, employeeName: "Phạm Thị D" },
  { id: 5, employeeName: "Hoàng Văn E" },
];

// Thêm 5 đối tượng "Treatment" cho mỗi thú cưng
pets.forEach((pet) => {
  let count = 1;
  for (let i = 1; i <= 5; i++) {
    treatmentData.push({
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
