import { type } from 'os'
import React from 'react'
import { FONTFAMILY } from '../../constants'
import './Homepage.css'
import { getQueriesForElement } from '@testing-library/react'
import { Carousel, Slider } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Item from 'antd/lib/list/Item'
import { url } from 'inspector'

const Homepage = () => {
  const Slider = [
    {
      id: 1,
      content: "DỊCH VỤ THÚ CƯNG TẠI NHÀ",
      image: '../../images/slider-img/carousel1.jpg',
    },
    {
      id: 2,
      content: "UY TÍN HÀNG ĐẦU VIỆT NAM",
      image: '../../images/slider-img/carousel1.jpg',
    },
    {
      id: 3,
      content: "BLLALALALALLALAL",
      imageUrl: '../../images/slider-img/carousel1.jpg',
    }
  ]
  return (
    <div id="homepage">
      <div id='header'>
        <Header></Header>
      </div>
      <div id="content">
        <div style={{ font: FONTFAMILY.primary}} className="slider">  
          <div className='testing'>
            {Slider.map((Slider, index) =>
            <div className="slider-container" key={Slider.id + index}>
              <div className="slider-content"> {Slider.content} </div>
              <img className="slider-background" src={Slider.imageUrl}> </img>
            </div>
            )}  
           </div>  
        </div>

        {/* Service-Start */}

        <div style= {{font: FONTFAMILY.primary}} className="service">
          <div className='service-title' style={{fontStyle: FONTFAMILY.primary}}>
            <div className="service-title-img"></div>
            <h1>CÁC DỊCH VỤ HÀNG ĐẦU</h1>

            
          </div>
          <div className="service-content">
            <div className="service-container">
              <div className='service-body'>
                <img className='service-petcare-icon'></img>
                <span className='service-name'>PET CARE</span>
                <div className='service-description'>Cùng với sự tin tưởng của khách hàng, 
                   Ngáo Service  cung cấp các sản phẩm và phụ kiện đa dạng, chất lượng, 
                   uy tín hàng đầu Việt Nam </div>
                <a href='' className='service-button'>Xem thêm</a>
              </div>
            </div>
            <div className="service-container">
              <div className='service-body'>
                <img className='service-petspa-icon'></img>
                <span className='service-name'>PET SPA</span>
                <div className='service-description'>Chúng tôi có những chuyên viên chăm sóc sức khoẻ có chứng nhận để đảm bảo cho thú cưng của bạn luôn vui tươi và khoẻ mạnh </div>
                <a href='' className='service-button'>Xem thêm</a>
              </div>
            </div>
            <div className="service-container">
              <div className='service-body'>
                <img className='service-pettrain-icon'></img>
                <span className='service-name'>PET TRAIN</span>
                <div className='service-description'>Đồng hành với thú cưng của bạn là những chuyên viên huấn luyện có thể giúp cho thú cưng của bạn luôn zui zẻ và nghe lời  </div>
                <a href='' className='service-button'>Xem thêm</a>
              </div>
            </div>
            <div className="clear"></div>  
          </div>
        </div>

        {/* Service-END */}
  
        {/* Contact-START */}

        <div style={{font: FONTFAMILY.primary}} className="contact">
          <div className="contact-address">NgaoService.com</div>
          <div className="contact-content">Chúng tôi luôn <span>sẵn sàng</span> phục vụ bạn</div>
          <div className="contact-button-area">
            <button className='contact-button'>
              <i><FontAwesomeIcon icon={faPhone} shake /></i>
              <span>DỊCH VỤ THÚ CƯNG TẠI NHÀ-24/7</span>
            </button>
          </div>
        </div>

        {/* Contact-END */}


        {/* Training-START */}

        <div className="trainer" style={{font: FONTFAMILY.primary}}>
          <div className="trainer-title">
            <div className="trainer-title-background"></div>
            <div className="trainer-title-description">Chuyên gia huấn luyện <span>hàng đầu</span></div>
          </div>
          <div className="trainer-content">
            <div className="trainer-preview">
              <span></span>
            </div>
            <div className="trainer-container1">
              <div className="trainer-avatar"></div>
              <div className="trainer-body">
                <div className="trainer-descriptionn">

                </div>
              </div>
            </div>
            <div className="trainer-container2">
              <div className="trainer-avatar">
                <i><FontAwesomeIcon icon={faUser} /></i>
              </div>
              <div className="trainer-body">
                <div className="trainer-descriptionn">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training-END */}
      </div>
      <div id="footer">
        <Footer></Footer>
      </div>
     
    </div>
  )
}


export default Homepage
