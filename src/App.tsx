import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "../src/routes/Routes";
import HeaderDashboard from "./components/HeaderDashboard";

import "react-toastify/dist/ReactToastify.css";

import { Footer, Header } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeaderDashboard />

      <ToastContainer />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
