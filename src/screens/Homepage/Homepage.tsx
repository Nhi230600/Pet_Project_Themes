import { type } from 'os'
import React from 'react'
import { COLORS, FONTCOLOR, FONTFAMILY, FONTSIZE } from '../../constants'
import './Homepage.css'
import { getQueriesForElement } from '@testing-library/react'
import { Carousel } from 'antd';
import Header from '../../components/Header'


const Homepage = () => {
  const Slider = document.querySelector('SliderAnimation')
  return (
    <div id="homepage">
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

        <div className="service">
          <div className="service-img-background"></div>
            <div className="service-content">
              <p>CÁC DỊCH VỤ HÀNG ĐẦU</p>
              <div className="service-petshop">

              </div>
            

            </div>
        </div>
        <div className="contact">

        </div>
        <div className="training">

        </div>
      </div>
      <div id="footer"></div>
     
    </div>
  )
}


export default Homepage
