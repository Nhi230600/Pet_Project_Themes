import { faCakeCandles, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Pagination } from "antd";
import "antd/dist/antd.css";
import Nav from "components/Nav";
import { petData } from "components/PetConstant";
import Pet from "components/PetConstant/Type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPet.css";

const MyPet = () => {
  const [newPet, setNewPet] = useState(null);
  const navigate = useNavigate();
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (value: number) => {
    navigate(`/mypet/${value}`);
  };
  const showModal = () => {
    navigate("/mypet/add");
  };
  const totalItems = petData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);
  const petsToDisplay = petData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="mypet">
      <Nav />
      <div className="container-mypet">
        <div className="container-mypet-infor">
          <div className="container-mypet-infor-heading">
            <span>THÚ CƯNG CỦA BẠN</span>
          </div>
          <div className="add-pet-list">
            <Button
              className="button-add-pet-list"
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} />}
              onClick={showModal}
            >
              Thêm thú cưng
            </Button>
          </div>
          {petsToDisplay.map((pet: Pet) => (
            <div className="container-mypet-infor-content" key={pet.id}>
              <div className="container-mypet-infor-content-avatar">
                <img src={pet.image} />
              </div>
              <div className="container-mypet-infor-content-name">
                <span className="name-mypet">{pet.name}</span>
                <div className="container-mypet-infor-content-name-age">
                  <FontAwesomeIcon
                    icon={faCakeCandles}
                    style={{
                      color: "#e51f6e",
                      marginRight: "1vw",
                      fontSize: "1.5vw",
                    }}
                  />
                  <span>{pet.age} tuổi</span>
                </div>
                <div>
                  <span>{pet.breed}</span>
                </div>
              </div>
              <div className="container-mypet-infor-content-viewdetail">
                <button
                  className="container-mypet-infor-content-viewdetail-button"
                  onClick={() => handleClick(pet.id)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
          <Pagination
            className="pagination-mypet"
            current={currentPage}
            total={totalItems}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPet;
