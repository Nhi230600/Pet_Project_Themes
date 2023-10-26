import {
  faBirthdayCake,
  faDog,
  faPaw,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "components/Nav";
import { petData } from "components/PetConstant";
import Pet from "components/PetConstant/Type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PetProfilePage.css";

const PetProfilePage = () => {
  const { id } = useParams();
  const [pets, setPets] = useState<Pet[]>(petData);
  const [pet, setPet] = useState<Pet | null>(null);
  useEffect(() => {
    if (id) {
      const selectedPet = pets.find((p) => p.id === parseInt(id));
      if (selectedPet) {
        setPet(selectedPet);
      }
    }
  }, [id, pets]);
  if (!pet) {
    return <p>Không tìm thấy thú cưng</p>;
  }
  return (
    <div>
      <Nav />
      <div className="container_PetProfilePage">
        <div className="container_PetProfilePage_img">
          <img
            alt="avatar_pet"
            src={pet.image}
            style={{
              width: "25vw",
              height: "25vw",
              borderRadius: "50%",
              objectFit: "cover",
              border: "0.3rem solid black",
            }}
          />
        </div>
        <div>
          <div className="container_PetProfilePage_petName">
            <h1 style={{ fontSize: "3vw" }}>{pet.name}</h1>
          </div>
          <div className="container_PetProfilePage_properti">
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon
                icon={faDog}
                style={{ marginRight: "25px", fontSize: "35px" }}
              />
              <p>Nguồn gốc: </p>
              <p>{pet.breed}</p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon
                icon={faPaw}
                style={{ marginRight: "25px", fontSize: "35px" }}
              />
              <p style={{ marginRight: "5px" }}>Đặc điểm: </p>
              <p>{pet.description}</p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon
                icon={faVenusMars}
                style={{ marginRight: "25px", fontSize: "35px" }}
              />
              <p>Giới tính: </p>
              <p>{pet.gender}</p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon
                icon={faBirthdayCake}
                style={{ marginRight: "25px", fontSize: "35px" }}
              />
              <p>Tháng tuổi: </p>
              <p>{pet.age} tháng tuổi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfilePage;
