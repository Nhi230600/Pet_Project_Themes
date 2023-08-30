import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login"
import BookTrainer from "./screens/Booking/BookTrainer/BookTrainer";
import BookSpa from "./screens/Booking/BookSpa/BookSpa";
import BookCare from "./screens/Booking/BookCare/BookCare";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;