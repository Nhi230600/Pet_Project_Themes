import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer, Header } from "../../../components";
import { FONTSIZE } from "../../../constants";
import { Modal } from "antd";
import { useState } from "react";
import PetProfilePage from "../../PetProfilePage/PetProfilePage";
import Avatar_Cat from "../../../images/avatar_cat.jpeg";
import Avatar_Golden from "../../../images/avatar_golden.jpg";
import Avatar_Poodle from "../../../images/avatar_poodle.jpg";
import ImagePet from "../../../images/image-pagemypet.png";

import "./MyPet.css";

const MyPet = () => {
  const [isModalPetProfileOpen, setIsModalPetProfileOpen] = useState(false);

  const showModalPetProfile = () => {
    setIsModalPetProfileOpen(true);
  };
  const handleCancelPetProfile = () => {
    setIsModalPetProfileOpen(false);
  };
  return (
    <div className="mypet">
      <Header />
      <div className="container-mypet">
        <div className="container-mypet-infor">
          <div className="container-mypet-infor-heading">
            <span
              style={{
                fontSize: FONTSIZE.logoSmall,
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
                <span style={{ fontSize: FONTSIZE.text, fontWeight: 600 }}>
                  APOLLO
                </span>
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
                <span style={{ fontSize: FONTSIZE.text }}>2 tuổi</span>
              </div>
              <div>
                <span style={{ fontSize: FONTSIZE.text }}>
                  Golden Retrievers
                </span>
              </div>
            </div>
            <div className="container-mypet-infor-content-viewdetail">
              <button
                className="container-mypet-infor-content-viewdetail-button"
                style={{ fontSize: FONTSIZE.textButton }}
                onClick={showModalPetProfile}
              >
                Xem chi tiết
              </button>
              <Modal
                width={1100}
                open={isModalPetProfileOpen}
                onCancel={handleCancelPetProfile}
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
                <span style={{ fontSize: FONTSIZE.text, fontWeight: 600 }}>
                  GRETCHEN
                </span>
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
                <span style={{ fontSize: FONTSIZE.text }}>1 tuổi</span>
              </div>
              <div>
                <span style={{ fontSize: FONTSIZE.text }}>Poodle</span>
              </div>
            </div>
            <div className="container-mypet-infor-content-viewdetail">
              <button
                className="container-mypet-infor-content-viewdetail-button"
                style={{ fontSize: FONTSIZE.textButton }}
                onClick={showModalPetProfile}
              >
                Xem chi tiết
              </button>
              <Modal
                width={1100}
                open={isModalPetProfileOpen}
                onCancel={handleCancelPetProfile}
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
                <span style={{ fontSize: FONTSIZE.text, fontWeight: 600 }}>
                  PEPPER
                </span>
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
                <span style={{ fontSize: FONTSIZE.text }}>2 tuổi</span>
              </div>
              <div>
                <span style={{ fontSize: FONTSIZE.text }}>Mèo ba tư</span>
              </div>
            </div>
            <div className="container-mypet-infor-content-viewdetail">
              <button
                className="container-mypet-infor-content-viewdetail-button"
                style={{ fontSize: FONTSIZE.textButton }}
                onClick={showModalPetProfile}
              >
                Xem chi tiết
              </button>
              <Modal
                width={1100}
                open={isModalPetProfileOpen}
                onCancel={handleCancelPetProfile}
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
