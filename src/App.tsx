import Router from "../src/routes/Routes";
import FooterDashboard from "./components/FooterDashboard";
import HeaderDashboard from "./components/HeaderDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <HeaderDashboard />
      <ToastContainer />
      <Router />
      <FooterDashboard />
    </div>
  );
};

export default App;
