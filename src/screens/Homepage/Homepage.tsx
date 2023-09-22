import { type } from "os";
import React from "react";
import "./Homepage.css";

import Header from "../../components/Header";
import Service from "components/Service";

import { TrainerList } from "components";
import Nav from "components/Nav";
import { Carousel, Slider, Card } from "antd";

import Footer from "../../components/Footer";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImagesComponent from "components/Banner";
import Content1 from "screens/Content/1";
import Content2 from "screens/Content/2";
import Content3 from "screens/Content/3";
import "bootstrap/dist/css/bootstrap.min.css";
const Homepage = () => {
  const Sliders = [
    {
      id: 1,
      content: <Content1 />,
      imageUrl:
        "https://images.deccanherald.com/deccanherald%2F2023-08%2Fb5368628-0ea6-4bc8-a793-8e2b5c6e21a9%2FCheems.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3",
      contentType: "image",
    },
    {
      id: 2,
      content: <Content2 />,
      imageUrl:
        "https://images.deccanherald.com/deccanherald%2F2023-08%2Fb5368628-0ea6-4bc8-a793-8e2b5c6e21a9%2FCheems.png?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.3",
      contentType: "image",
    },
    {
      id: 3,
      content: <Content3 />,
      imageUrl:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyAEIpgj38KyLFELm2bK9Y7krBkz1K-cMq8&q=place_id:ChIJn6wOs6lZwokRLKy1iqRcoKw",
      contentType: "iframe",
    },
  ];
  const Employees = [
    {
      Number: 1,
      Name: "Nguyễn Văn A",
      Avatar: "https://example.com/avatar.jpg",
      Props: "Bác sĩ",
      Experience: "3 năm",
      Description:
        "Tôi là một bác sĩ có 3 năm kinh nghiệm trong lĩnh vực y học. Tôi cam kết đem lại sự chăm sóc tốt nhất cho bệnh nhân và luôn nỗ lực để nâng cao kiến thức và kỹ năng của mình trong lĩnh vực này. Tôi tin rằng sức khỏe là quý báu và luôn sẵn sàng hỗ trợ bệnh nhân để họ có cuộc sống khỏe mạnh và hạnh phúc.",
    },

    {
      Number: 2,
      Name: "Nguyễn Văn A",
      Avatar: "https://example.com/avatar.jpg",
      Props: "Bác sĩ",
      Experience: "3 năm",
      Description:
        "Tôi là một bác sĩ có 3 năm kinh nghiệm trong lĩnh vực y học. Tôi cam kết đem lại sự chăm sóc tốt nhất cho bệnh nhân và luôn nỗ lực để nâng cao kiến thức và kỹ năng của mình trong lĩnh vực này. Tôi tin rằng sức khỏe là quý báu và luôn sẵn sàng hỗ trợ bệnh nhân để họ có cuộc sống khỏe mạnh và hạnh phúc.",
    },
  ];
  return (
    <div id="homepage">
      <div id="header">
        <Nav></Nav>

        <div></div>
        <div id="content">
          <div className="slider">
            <Carousel autoplay>
              {Sliders.map((Slider, index) => (
                <Card>
                  <div className="banner">
                    <div className="row main">
                      <div className="col-md-7 carousel-content">
                        {Slider.content}
                      </div>
                      <div className="col-md-4 ">
                        <ImagesComponent
                          contentUrl={Slider.imageUrl}
                          contentType={Slider.contentType}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>
          
          
          {/* Service-Start */}
          <div>
            <TrainerList />
          </div>

          {/* Service-END */}

          {/* Contact-START */}

          <div className="contact">
            <div className="contact-address">NgaoService.com</div>
            <div className="contact-content">
              Chúng tôi luôn <span>sẵn sàng</span> phục vụ bạn
            </div>
            <div className="contact-button-area">
              <button className="contact-button">
                <i>
                  <FontAwesomeIcon icon={faPhone} shake />
                </i>
                <span>DỊCH VỤ THÚ CƯNG TẠI NHÀ-24/7</span>
              </button>
            </div>
          </div>

          {/* Contact-END */}

          {/* Training-START */}

          <div className="trainer">
            <div className="trainer-title">
              <div className="trainer-title-background"></div>
              <div className="trainer-title-description">
                Chuyên gia huấn luyện <span>hàng đầu</span>
              </div>
            </div>
            <div className="trainer-content">
              <div className="trainer-preview">
                <span></span>
              </div>
              <div className="trainer-container"></div>
            </div>
          </div>

          {/* Training-END */}
        </div>
      </div>
      <div id="content">
        {/* Service-Start */}

        <div className="service">
          <div className="service-title">
            <div className="service-title-img"></div>
            <h1>CÁC DỊCH VỤ HÀNG ĐẦU</h1>
          </div>
          <Service />
        </div>

        {/* Contact-END */}

        {/* Training-START */}

        {/* Training-END */}
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Homepage;
