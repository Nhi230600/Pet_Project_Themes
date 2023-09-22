import React from "react";
import "./Content.css"; // Đảm bảo bạn đã đính kèm tệp CSS của bạn
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDog,
    faHeartbeat,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";


const App = () => {
    return (
        <div>
            <h1 className="mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-2">Activities and <a><strong>Exercise</strong></a></h1>
            <p className="mbr-text pb-3 align-left mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed eu dui non diam eleifend egestas id a
                ligula.</p>

            <div className="align-wrap align-left">
                <div className="icons-wrap">
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faDog} />
                        <h3 className="icon-title mbr-bold mbr-fonts-style display-7">Làm đẹp</h3>
                    </div>
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faHeartbeat} />
                        <h3 className="icon-title mbr-bold mbr-fonts-style display-7">Sức khỏe</h3>
                    </div>
                    <div className="icon-wrap">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <h3 className="icon-title mbr-bold mbr-fonts-style display-7">Huấn luyện</h3>
                    </div>

                </div>
                <div className="pick mbr-section-btn">
                    <button className="view">
                        <span>View more</span>
                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                        </svg>
                    </button>
                    <button className="view">
                        <span>Book now</span>
                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                            <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
