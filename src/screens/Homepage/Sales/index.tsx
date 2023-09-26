import image from "images/doge.png";
import "./Sales.css";
import { Card } from "antd";
const Sales = () => {
  return (
    <div className="sale-page">
      <Card>
        <div className="sales-background">
          <div className="sales-content">
            <div className="box-content">
              <h1 className="box-content text-sales">Khách sạn Thú cưng</h1>
              <h1 className="box-content text-sale-off">40% OFF</h1>
            </div>

            <div className="box-content doge">
              <img src={image} />
            </div>

            <div className="box-content button-sale"> ahihi</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sales;
