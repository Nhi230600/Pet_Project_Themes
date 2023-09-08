import Router from "../src/routes/Routes";
import FooterDashboard from "./components/FooterDashboard";
import HeaderDashboard from "./components/HeaderDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/Routes";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeaderDashboard />
      <ToastContainer />
      <Router />
      <FooterDashboard />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
