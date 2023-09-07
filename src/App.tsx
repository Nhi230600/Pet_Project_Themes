import Routes from "../src/routes/Routes";
import { Footer } from "./components";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
