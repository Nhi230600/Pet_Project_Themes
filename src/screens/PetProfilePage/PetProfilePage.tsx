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
import { useNavigate, useParams } from "react-router-dom";
import "./PetProfilePage.css";

const PetProfilePage = () => {
  const { id } = useParams();
  const [pets, setPets] = useState<Pet[]>(petData);
  const [pet, setPet] = useState<Pet | null>(null);
  const navigate = useNavigate();
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
  const handleBackButtonClick = () => {
    navigate(-1);
  };
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
              <FontAwesomeIcon className="icon-petprofile" icon={faDog} />
              <p>
                <span>Nguồn gốc:</span> {pet.breed}
              </p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon className="icon-petprofile" icon={faPaw} />
              <p>
                <span>Đặc điểm:</span> {pet.description}
              </p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon className="icon-petprofile" icon={faVenusMars} />
              <p>
                <span>Giới tính:</span> {pet.gender}
              </p>
            </div>
            <div className="container_PetProfilePage_properti_icon">
              <FontAwesomeIcon
                className="icon-petprofile"
                icon={faBirthdayCake}
              />
              <p>
                <span>Tháng tuổi:</span> {pet.age} tuổi
              </p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleBackButtonClick} className="back-button-profile">
        &#8592;
      </button>
    </div>
  );
};

export default PetProfilePage;
