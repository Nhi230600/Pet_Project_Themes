import {
  faDog,
  faHeartbeat,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import ButtonDog from "components/ButtonBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Content.css"; // Đảm bảo bạn đã đính kèm tệp CSS của bạn


const App = () => {
  return (
    <div>
      <h1 className="mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-2">
        Activities and{" "}
        <a>
          <strong>Exercise</strong>
        </a>
      </h1>
      <p className="mbr-text mbr-fonts-style display-4">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non
        diam eleifend egestas id a ligula.
      </p>

      <div className="align-wrap align-left">
        <div className="icons-wrap">
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faDog} />
            <h3 className="icon-title mbr-bold mbr-fonts-style display-7">
              Làm đẹp
            </h3>
          </div>
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faHeartbeat} />
            <h3 className="icon-title mbr-bold mbr-fonts-style display-7">
              Sức khỏe
            </h3>
          </div>
          <div className="icon-wrap">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h3 className="icon-title mbr-bold mbr-fonts-style display-7">
              Huấn luyện
            </h3>
          </div>
        </div>
        <div className="pick mbr-section-btn">
          <div className="button-content-2">
            <ButtonDog content="View More" />
          </div>

          <ButtonDog content="Book now" />
        </div>
      </div>
    </div>
  );
};

export default App;
