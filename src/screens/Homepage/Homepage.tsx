import { type } from "os";
import React from "react";
import "./Homepage.css";
import { Carousel, Slider } from "antd";
import Header from "../../components/Header";
import Service from "components/Service";
import Footer from "../../components/Footer";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      content: "CHĂM SÓC VÀ HUẤN LUYỆN CHO THÚ CƯNG",
      imageUrl: "https://wallpaperaccess.com/full/390954.jpg",
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
        <Header></Header>
      </div>
      <div id="content">
        <div className="slider">
          <Carousel autoplay>
            {Sliders.map((Slider, index) => (
              <div key={index}>
                <img className="slider-background" src={Slider.imageUrl}></img>
                <div className="slider-content"> {Slider.content} </div>
              </div>
            ))}
          </Carousel>
        </div>

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
      <div id="footer"></div>
    </div>
  );
};

export default Homepage;
