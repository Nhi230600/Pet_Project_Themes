import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Routes from "../src/routes/Routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
