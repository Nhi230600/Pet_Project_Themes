import { Carousel, Card } from "antd";
import ImagesComponent from "components/Banner"
import slidersData from "./slidersData";
import "./Carousel.css";
const Sliders = slidersData;
const App = () => {
  return (
    <div className="slider" data-aos="zoom-out-down" >
      <Carousel autoplay>
        {Sliders.map((Slider, index) => (
          <Card>
            <div className="banner">
              <div className="row main">
                <div className="col-md-7 carousel-content">
                  {Slider.content}
                </div>
                <div className="col-md-4 image-banner">
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
  );
};

export default App;