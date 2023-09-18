import phoc_soc_0 from "../../images/phoc_soc_0.jpg";
import {
  faDog,
  faPaw,
  faVenusMars,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, FONTCOLOR, FONTSIZE } from "../../application/config/constants";
import "./PetProfilePage.css";
const PetProfilePage = () => {
  return (
    <div className="container_PetProfilePage">
      <div className="container_PetProfilePage_img">
        <img
          src={phoc_soc_0}
          alt="avatar_pet"
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
          <h1
            style={{
              fontSize: "3vw",
            }}
          >
            GRETCHEN
          </h1>
        </div>
        <div className="container_PetProfilePage_properti">
          <div className="container_PetProfilePage_properti_icon">
            <FontAwesomeIcon
              icon={faDog}
              style={{ marginRight: "25px", fontSize: "35px" }}
            />
            <p>Nguồn gốc:</p>
            <p>Thuần chủng</p>
          </div>
          <div className="container_PetProfilePage_properti_icon">
            <FontAwesomeIcon
              icon={faPaw}
              style={{ marginRight: "25px", fontSize: "35px" }}
            />
            <p style={{ marginRight: "5px" }}>Đặc điểm:</p>
            <p>Lông dày</p>
          </div>
          <div className="container_PetProfilePage_properti_icon">
            <FontAwesomeIcon
              icon={faVenusMars}
              style={{ marginRight: "25px", fontSize: "35px" }}
            />
            <p>Giới tính:</p>
            <p>Đực</p>
          </div>
          <div className="container_PetProfilePage_properti_icon">
            <FontAwesomeIcon
              icon={faBirthdayCake}
              style={{ marginRight: "25px", fontSize: "35px" }}
            />
            <p>Tháng tuổi:</p>
            <p>2 tháng tuổi rưỡi</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PetProfilePage;
