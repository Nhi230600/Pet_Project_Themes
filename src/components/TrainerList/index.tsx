import "./TrainerList.css";
import Button from "components/Button";
import trainer2 from "images/trainer2.jpg";
import trainer3 from "images/trainer3.jpg";
import trainer4 from "images/trainer4.jpg";

const TrainerList = () => {
  const trainerdata = [
    {
      img: trainer4,
      name: "John Nguyen",
      position: "Huấn luyện viên",
      exp: "4 years",
    },
    {
      img: trainer2,
      name: "Malina Tran",
      position: "Bác sĩ thú y",
      exp: "3 years",
    },
    {
      img: trainer3,
      name: "Jack Ngo",
      position: "Nhà sáng lập",
      exp: "5 years",
    },
  ];

  return (
    <div className="trainerlist-container" data-aos="fade-down">
      <div className="trainerlist-container-title">
        <span className="trainerlist-container-title-1">Our Trainer</span>
      </div>

      <div className="trainerlist-container-content">
        {trainerdata.map((data) => (
          <div className="trainerlist-container-content-detail">
            <div className="trainerlist-container-content-detail-img">
              <img className="trainer-img" src={data.img} alt="" />
            </div>
            <div className="trainerlist-container-content-detail-name">
              <h1 className="trainerlist-container-content-detail-name-1">
                {data.name}
              </h1>
              <p className="trainerlist-container-content-detail-name-2 text-yellow-600">
                {data.position}
              </p>
              <p className="trainerlist-container-content-detail-name-2">
                {data.exp}
              </p>

              <Button btnName="VIEW MORE" btnWidth="40" btnHeight="15" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerList;
