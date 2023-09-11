import Router from "../src/routes/Routes";
import FooterDashboard from "./components/FooterDashboard";
import HeaderDashboard from "./components/HeaderDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/Routes";
import { Footer, Header } from "./components";
import Homepage from "./screens/Homepage/Homepage";
import Hommepagecarousel from "./screens/Homepage/Homepage-components/Homepagecarousel";

const App = () => {
  return (
    <div className="App">
      <Hommepagecarousel/>
    </div>
  );
};

export default App;