import React from "react";
import bone from "images/bone.png"
import "./Content.css";

const App = () => {
    return (
        <div className="content-1">
            <h1 className="mbr-section-title align-left mbr-bold pb-4 mbr-fonts-style display-1">Pets Boarding Services</h1>
            <div className="align-wrap">
                <div className="icons-wrap">
                    <div className="icon-wrap">
                        <span className="fab fa-github"></span>
                        <div className="text-wrap">
                            <h3 className="icon-title mbr-bold mbr-fonts-style display-5">Boarding Any Pets</h3>
                            <p className="mbr-text mbr-fonts-style display-4"> Lorem ipsum dolor sit
                                amet, consectetur
                                adipiscing elit. Sed eu dui non diam.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="link-wrap">
                <div className="image-container">
                    <img className="bone" src={bone} alt="Hình ảnh bone" id="moving-image" />
                    <div className="book-now">BOOK NOW</div>
                </div>
            </div>
        </div>
    );
};

export default App;