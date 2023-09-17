import { ToastContainer } from "react-toastify";
import { Footer } from "components";
import Routes from "./configs/routers";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
