import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./config/routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "components";
import "./App.css";
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
