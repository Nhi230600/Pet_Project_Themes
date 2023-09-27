import { SearchOutlined } from "@ant-design/icons";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-input">
        <input
          placeholder="Tìm kiếm tại đây..."
          style={{
            width: "100%",
            height: "3vw",
            borderRadius: "0.3rem",
            border: "none",
          }}
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="search-button">
        <button className="search-button-action">
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
};

export default Search;
