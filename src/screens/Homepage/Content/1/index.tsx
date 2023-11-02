import "./Content.css";

const App = () => {
  return (
    <div className="content-1">
      <h1 className="mbr-section-title align-left mbr-bold pb-4 mbr-fonts-style display-1">
        Cửa hàng dịch vụ thú cưng
      </h1>
      <div className="align-wrap">
        <div className="icons-wrap">
          <div className="icon-wrap">
            <span className="fab fa-github"></span>
            <div className="text-wrap">
              <h3 className="icon-title mbr-bold mbr-fonts-style display-5">
                Nơi chăm sóc tận tình
              </h3>
              <p className="mbr-text mbr-fonts-style display-4">
                {" "}
                Tận hưởng dịch vụ chăm sóc thú cưng chất lượng tại cửa hàng của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
