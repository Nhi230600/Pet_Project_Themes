import { type } from 'os'
import React from 'react'
import { FONTFAMILY } from '../../constants'
import './Homepage.css'
import { Carousel, Slider } from 'antd';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Homepage = () => {
  const Sliders = [
    {
      id: 1,
      content: "DỊCH VỤ THÚ CƯNG TẠI NHÀ",
      imageUrl: "https://wallpaperaccess.com/full/390954.jpg",
    },
    {
      id: 2,
      content: "UY TÍN HÀNG ĐẦU VIỆT NAM",
      imageUrl: "https://wallpaperaccess.com/full/390954.jpg",
    },
    {
      id: 3,
      content: "BLLALALALALLALAL",
      imageUrl: "https://wallpaperaccess.com/full/390954.jpg",
    }
  ]
  const Employees = [
    {
      Number: 1,
      Name: "Nguyễn Văn A",
      Avatar: "",
      Props: "Bác sĩ",
      Experience: "3 năm",
      Description: "Adalkdhliwdlkasdlijaliawjlidjlcnskdjaoiwhdslkjdoaiwhdkjloaiwjdoiahd",
    },
    {
      Number: 2,
      Name: "Nguyễn Văn A",
      Avatar: "",
      Props: "Bác sĩ",
      Experience: "3 năm",
      Description: "Adalkdhliwdlkasdlijaliawjlidjlcnskdjaoiwhdslkjdoaiwhdkjloaiwjdoiahd",
    }
  ]
  return (
    <div id="homepage">
      <div id='header'>
        <Header></Header>
      </div>
      <div id="content">
        <div style={{ font: FONTFAMILY.primary}} className="slider">  
          <Carousel autoplay>
            {Sliders.map((Slider, index) =>
              <div key={index}>
                <img className="slider-background" src={Slider.imageUrl} ></img>
                <div className="slider-content"> {Slider.content} </div>
              </div>
            )}
          </Carousel> 
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
            <div className="trainer-container">
              <Carousel>
                {Employees.map((Employee, index) => 
                  <div className="trainer-body" key={index}>
                    <div className="trainer-avatar"> 
                      <i><FontAwesomeIcon icon={faUser}/></i>
                    </div>
                    <div className="trainer-name"> {Employee.Name} </div>
                    <div className="trainer-description"> {Employee.Description}
                      <ul> 
                        <li>Chuyên ngành: {Employee.Props}</li>
                        <li>Kinh nghiệm: {Employee.Experience}</li>
                      </ul>
                    </div>
                  </div>         
                )}
              </Carousel>
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
