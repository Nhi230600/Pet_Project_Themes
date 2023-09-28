import "./Map.css";
import dataMap from "./dataMap";

const App = () => {
  const url = dataMap.URL;
  return (
    <div className="map-container">
      <iframe src={url} />
    </div>
  );
};

export default App;
