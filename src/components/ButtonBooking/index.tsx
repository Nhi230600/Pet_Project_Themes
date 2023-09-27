import "./ButtonBooking.css";

const ButtonBooking = () => {
  return (
    <div className="container-button-booking">
      <div className="button-container">
        <div className="dog">
          <div className="tail"></div>
          <div className="body"></div>
          <div className="head">
            <div className="eyes">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="nuzzle">
              <div className="mouth">
                <div className="tongue"></div>
              </div>
              <div className="nose">
                <div className="nostrils"></div>
                <div className="highlight"></div>
              </div>
            </div>
          </div>
          <div className="ears">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <button>Book now</button>
        <div className="paw"></div>
        <div className="paw top"></div>
      </div>
    </div>
  );
};

export default ButtonBooking;
