import image from "images/doge.png";
import "./Sales.css";
import { Card } from "antd";
import Button from "components/ButtonBooking";
const Sales = () => {
  return (
    <div className="sale-page" data-aos="fade-up">
      <Card>
        <div className="sales-background">
          <div className="sales-content">
            <div className="box-content">
              <h1 className="box-content text-sales">
                Khách sạn
                <br />
                Thú cưng
              </h1>
              <h1 className="box-content text-sale-off">40% OFF</h1>
            </div>

            <div className="box-content doge">
              <img src={image} />
            </div>
            <div className="button-sale">
              <Button />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sales;
