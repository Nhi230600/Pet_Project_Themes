import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { useState } from "react";
import PetProfilePage from "../../PetProfilePage/PetProfilePage";
import Avatar_Cat from "../../../images/avatar_cat.jpeg";
import Avatar_Golden from "../../../images/avatar_golden.jpg";
import Avatar_Poodle from "../../../images/avatar_poodle.jpg";
import ImagePet from "../../../images/image-pagemypet.png";

import "./MyPet.css";
import Nav from "components/Nav";

const MyPet = () => {
  const [isModalPetProfileOpen, setIsModalPetProfileOpen] = useState(false);

  const ModalPetProfile = (isShow: boolean) => {
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
          <div className="container-mypet-infor-content">
            <div className="container-mypet-infor-content-avatar">
              <img
                style={{ width: "12vw", height: "12vw", borderRadius: "0.5vw" }}
                src={Avatar_Golden}
                alt="avatar"
              />
            </div>
            <div className="container-mypet-infor-content-name">
              <div>
                <span>APOLLO</span>
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
                <span>2 tuổi</span>
              </div>
              <div>
                <span>Golden Retrievers</span>
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
          <div className="container-mypet-infor-content">
            <div className="container-mypet-infor-content-avatar">
              <img
                style={{ width: "12vw", height: "12vw", borderRadius: "0.5vw" }}
                src={Avatar_Poodle}
                alt="avatar"
              />
            </div>
            <div className="container-mypet-infor-content-name">
              <div>
                <span>GRETCHEN</span>
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
                <span>1 tuổi</span>
              </div>
              <div>
                <span>Poodle</span>
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
          <div className="container-mypet-infor-content">
            <div className="container-mypet-infor-content-avatar">
              <img
                style={{ width: "12vw", height: "12vw", borderRadius: "0.5vw" }}
                src={Avatar_Cat}
                alt="avatar"
              />
            </div>
            <div className="container-mypet-infor-content-name">
              <div>
                <span>PEPPER</span>
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
                <span>2 tuổi</span>
              </div>
              <div>
                <span>Mèo ba tư</span>
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
