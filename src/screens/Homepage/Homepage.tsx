import React from 'react';
import { Carousel } from 'antd';
import Header from '../../components/Header';
import { COLORS, FONTCOLOR, FONTFAMILY, FONTSIZE } from '../../constants';
//import './Homepage.css';

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="header">
        <Header />
      </div>
      <div id="content">
        <div className="slider">
          <Carousel autoplay>
            <div>
              <img
                className="slider-img"
                src="D:/workspace/reactJS/Pet_Project_Themes/src/images/logo_page.jpg"
                alt="img1"
              />
              <p className="slider-content">DỊCH VỤ THÚ CƯNG HÀNG ĐẦU</p>
            </div>
            <div>
              <img
                className="slider-img"
                src="src/images/carousel1.jpg"
                alt="img2"
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="src/images/carousel1.jpg"
                alt="img3"
              />
            </div>
          </Carousel>
        </div>
        <div className="service-section">
          <img
            className="service-img-background"
            src="src/images/service-img-background.jpg"
            alt=""
          />
          <h2 className="service-heading">Dịch vụ hàng đầu</h2>
          <div className="service">
            <div className="service-img-background"></div>
            <div className="service-content">
              <p>CÁC DỊCH VỤ HÀNG ĐẦU</p>
              <div className="service-petshop">
                {/* Add your service content here */}
              </div>
            </div>
          </div>
        </div>
        <div className="contact"></div>
        <div className="training"></div>
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Homepage;