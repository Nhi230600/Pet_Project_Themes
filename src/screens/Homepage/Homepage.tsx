import { Carousel } from "antd";
import "./Homepage.css";
import { type } from 'os'
import React from 'react'
import { COLORS, FONTCOLOR, FONTFAMILY, FONTSIZE } from '../../constants'
import { getQueriesForElement } from '@testing-library/react'
import Header from '../../components/Header'

const Homepage = () => {
  const Slider = document.querySelector("SliderAnimation");
  return (
    <div className="homepage">
      <div className="Header"></div>
      <div className="content">
        <div className="slider">
          <Carousel autoplay>
            <div>
              <img
                className="slider-img"
                src="D:\workspace\reactJS\Pet_Project_Themes\src\images\logo_page.jpg"
                alt="img1"
              />
              <p className="slider-content"> DỊCH VỤ THÚ CƯNG HÀNG ĐẦU</p>
            </div>
            <div>
              <img
                className="slider-img"
                src="src\images\carousel1.jpg"
                alt="img2"
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="src\images\carousel1.jpg"
                alt="img3"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div id='header'>
        <Header></Header>
      </div>
      <div id="content">
        <div className="slider">
          <Carousel autoplay>
            <div className='slider-img'>
              <p className='slider-content'>DỊCH VỤ THÚ CƯNG TẠI NHÀ</p>
            </div>
            <div className='slider-img'>
              <p className='slider-content'>UY TÍN HÀNG ĐẦU VIỆT NAM</p>
            </div>     
          </Carousel>
        </div>

        <div className="service-section">
          <img
            className="service-img-background"
            src="src\images\service-img-background.jpg"
            alt=""
          />
          <h2 className="service-heading">Dịch vụ hàng đầu</h2>

        <div className="service">
          <div className="service-img-background"></div>
            <div className="service-content">
              <p>CÁC DỊCH VỤ HÀNG ĐẦU</p>
              <div className="service-petshop">

              </div>
              
            </div>
        </div>
        
        <div className="contact"></div>
        <div className="training"></div>
      </div>
      <div className="footer"></div>
    </div>
  </div>
  );
};

export default Homepage;
