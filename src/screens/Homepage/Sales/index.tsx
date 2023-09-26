import image from "images/doge.png"
import "./Sales.css";
import { Card } from "antd";
const App = () => {
    return (
        <div className="sale-page" data-aos="fade-up" >
            <Card >
                <div className="sales-background">

                    <div className="sales-content">
                        <div className="box-content">
                            <h1 >Pets Boarding</h1>
                        </div>

                        <div className="box-content doge">
                            <img src={image} />
                        </div>
                        <div className="box-content">
                            <h1>
                                40% OFF
                            </h1>
                        </div>

                    </div>


                </div>

            </Card>
        </div>

    );
};

export default App;
