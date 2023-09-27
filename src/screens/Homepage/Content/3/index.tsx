
import { Card } from "antd";
import "./Content.css";
import {
    faLocationDot,
    faPhoneSquare,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const App = () => {
    return (
        <div className="content-3">
            <Card className="card-content"
            >
                <div className="item">
                    <div className="card-img">
                        <FontAwesomeIcon className="icon"
                            icon={faLocationDot}
                        />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title">Address</h4>
                        <p className="mbr-text pb-3 mbr-fonts-style  ">Green Meadows
                            <br />Street 26<br />Victoria, Australia
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="card-img">
                        <FontAwesomeIcon className="icon"
                            icon={faPhoneSquare}
                        />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-bold mbr-fonts-style ">Telephone</h4>
                        <p className="mbr-text pb-3 mbr-fonts-style  ">+971 2 3843847
                            <br />+971 4 2848849<br />+971 6 2845848 &nbsp;<br /></p>
                    </div>
                </div>
                <div className="item">
                    <div className="card-img">
                        <FontAwesomeIcon className="icon"
                            icon={faEnvelope}
                        />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title mbr-bold mbr-fonts-style ">E-mail</h4>
                        <p className="mbr-text pb-3 mbr-fonts-style  ">support@mobirise.com</p>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default App;
