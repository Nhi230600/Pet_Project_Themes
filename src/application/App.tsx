import { Footer } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./config/routes/Routes";
const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Routes />
      <Footer />
    </div>
  );
};
export default App;
