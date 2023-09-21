import Logo from "../../images/logo.png";
import "./HeaderDashboard.css";

const HeaderDashboard = () => {
  return (
    <div className="container-dashboard-header">
      <div>
        <img style={{ width: "20rem", height: "auto" }} src={Logo} alt="logo" />
      </div>
      <div>
        <span
          style={{
            textShadow: "0.2rem 0.1rem 0.1rem rgb(245, 214, 129)",
          }}
        >
          DASHBOARD
        </span>
      </div>
    </div>
  );
};

export default HeaderDashboard;
