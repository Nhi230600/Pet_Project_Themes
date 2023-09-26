import React, { useState, useEffect } from "react";
import "./Achievements.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCat,
  faNetworkWired,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  const [achievements, setAchievements] = useState({
    started: 0,
    pets: 0,
    playDays: 0,
    baths: 0,
  });

  useEffect(() => {
    // Hàm đếm số
    const startCounting = (target: number, key: string) => {
      const step = Math.ceil(target / 100); // Điều chỉnh bước số

      let current = 0;

      const interval = setInterval(() => {
        if (current < target) {
          current += step;
          setAchievements((prevAchievements) => ({
            ...prevAchievements,
            [key]: current,
          }));
        } else {
          clearInterval(interval);
        }
      }, 10); // Tần số cập nhật số
    };

    // Gọi hàm đếm số cho mỗi thành tựu
    startCounting(213, "started"); // STARTED
    startCounting(843, "pets"); // PETS
    startCounting(639, "playDays"); // PLAY DAYS
    startCounting(321, "baths"); // BATHS
  }, []);

  return (
    <div>
      <section className="progress-bars2 counters cid-rGtBgCg3f6" id="counters1-31">
        <div className="container">
          <h2 className="mbr-section-title mbr-bold pb-5 align-center mbr-fonts-style display-2">
            <div>
              <span>Our Achievements</span>
              <br />
            </div>
          </h2>

          <div className="row justify-content-center">
            <div className="card border-0 col-6 col-md-6 col-lg-3">
              <div className="element-achievements">
                <div className=" card-ico">
                  <h4>STARTED</h4>
                  <FontAwesomeIcon icon={faHome} className="icon" />
                </div>
                <div className="card-text">
                  <h3>{achievements.started}</h3>
                </div>
              </div>
            </div>
            <div className="card border-0 col-6 col-md-6 col-lg-3">
              <div className="element-achievements">
                <div className="card-ico">
                  <h4>PETS</h4>
                  <FontAwesomeIcon icon={faCat} className="icon" />
                </div>
                <div className="card-text">
                  <h3>{achievements.pets}</h3>
                </div>
              </div>
            </div>
            <div className="card border-0 col-6 col-md-6 col-lg-3">
              <div className="element-achievements">
                <div className="card-ico">
                  <h4>PLAY DAYS</h4>
                  <FontAwesomeIcon icon={faNetworkWired} className="icon" />
                </div>
                <div className="card-text">
                  <h3>{achievements.playDays}</h3>
                </div>
              </div>
            </div>
            <div className="card border-0 col-6 col-md-6 col-lg-3">
              <div className="element-achievements">
                <div className="card-ico">
                  <h4>BATHS</h4>
                  <FontAwesomeIcon icon={faCloud} className="icon" />
                </div>
                <div className="card-text">
                  <h3>{achievements.baths}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
