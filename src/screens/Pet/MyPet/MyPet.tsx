import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import Nav from "components/Nav";
import { petData } from "components/PetConstant";
import { useState } from "react";
import ImagePet from "../../../images/image-pagemypet.png";
import PetProfilePage from "../../PetProfilePage/PetProfilePage";
import "./MyPet.css";

const MyPet = () => {
  const [isModalPetProfileOpen, setIsModalPetProfileOpen] = useState(false);

  const ModalPetProfile = (isShow: any) => {
    return setIsModalPetProfileOpen(isShow);
  };

  return (
    <div className="mypet">
      <Nav />
      <div className="container-mypet">
        <div className="container-mypet-infor">
          <div className="container-mypet-infor-heading">
            <span
              style={{
                textShadow: "0.1rem 0.1rem 0.1rem rgb(245, 214, 129)",
              }}
            >
              THÚ CƯNG CỦA BẠN
            </span>
          </div>

          {petData.map((pet: any) => (
            <div className="container-mypet-infor-content" key={pet.id}>
              <div className="container-mypet-infor-content-avatar">
                <img
                  style={{
                    width: "12vw",
                    height: "12vw",
                    borderRadius: "0.5vw",
                  }}
                  src={pet.image}
                  alt="avatar"
                />
              </div>
              <div className="container-mypet-infor-content-name">
                <div>
                  <span>{pet.name}</span>
                </div>
                <div className="container-mypet-infor-content-name-age">
                  <FontAwesomeIcon
                    icon={faCakeCandles}
                    style={{
                      color: "#e51f6e",
                      marginRight: "1vw",
                      fontSize: "1.5vw",
                    }}
                  />
                  <span>{pet.age} tuổi</span>
                </div>
                <div>
                  <span>{pet.breed}</span>
                </div>
              </div>
              <div className="container-mypet-infor-content-viewdetail">
                <button
                  className="container-mypet-infor-content-viewdetail-button"
                  onClick={() => ModalPetProfile(true)}
                >
                  Xem chi tiết
                </button>
                <Modal
                  width={1100}
                  open={isModalPetProfileOpen}
                  onCancel={() => ModalPetProfile(false)}
                  footer={[]}
                >
                  <PetProfilePage />
                </Modal>
              </div>
            </div>
          ))}

          <div className="container-mypet-infor-add">
            <button className="container-mypet-infor-add-button">
              Thêm thú cưng
            </button>
          </div>
        </div>
        <div className="container-mypet-image">
          <img src={ImagePet} alt="Image" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default MyPet;
