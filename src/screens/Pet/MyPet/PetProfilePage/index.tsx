import {
  faBirthdayCake,
  faDog,
  faEdit,
  faPaw,
  faUpload,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loading } from "components";
import Nav from "components/Nav";
import { petData } from "components/PetConstant";
import Pet from "components/PetConstant/Type";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./PetProfilePage.css";
import axios from "axios";

const PetProfilePage = () => {
  const { petId } = useParams();
  const id = petId;
  const [pets, setPets] = useState<Pet[]>(petData);
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState<Pet | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const selectedPet = pets.find((p) => p.id === parseInt(id));
      if (selectedPet) {
        setPet(selectedPet);
      }
    }
  }, [id, pets]);

  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    const cloudName = "dulapxpnp";
    const presetKey = "ml_default";
    if (file && pet) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", presetKey);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;
        setPet({ ...pet, image: imageUrl });
        toast.success("Ảnh đã được tải lên thành công! 😊");
      } catch (error) {
        toast.error("Có lỗi xảy ra khi tải lên hình ảnh! ☹️");
      }
    }
    setLoading(false);
  };
  const handleEditButtonClick = () => {
    if (pet) {
      setIsEditing(true);
    }
  };
  const handleSaveButtonClick = () => {
    toast.success("Cập nhật thông tin thành công! 😊");
    setIsEditing(false);
  };

  if (!pet) {
    return <p>Không tìm thấy thú cưng</p>;
  }

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="container_PetProfilePage">
          <div className="container_PetProfilePage_img">
            <img src={pet.image} alt={pet.name} />
            <div className="button-edit-image-mypet">
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <label
                htmlFor="imageUpload"
                className="container-profile-image-upload-button styled"
                onClick={() => {
                  const fileInput = document.getElementById("imageInput");
                  if (fileInput) {
                    fileInput.click();
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faUpload}
                  style={{ marginRight: "1rem", marginTop: "0.7rem" }}
                />
                Click to Upload
              </label>
            </div>
          </div>
          {!isEditing ? (
            <div className="container_PetProfilePage_information">
              <div className="container_PetProfilePage_petName">
                <h1>{pet.name}</h1>
              </div>
              <div className="container_PetProfilePage_properti">
                <div className="container_PetProfilePage_properti_icon">
                  <FontAwesomeIcon className="icon-petprofile" icon={faDog} />
                  <p>
                    <span>Nguồn gốc:</span> {pet.breed}
                  </p>
                </div>
                <div className="container_PetProfilePage_properti_icon">
                  <FontAwesomeIcon className="icon-petprofile" icon={faPaw} />
                  <p>
                    <span>Đặc điểm:</span> {pet.description}
                  </p>
                </div>
                <div className="container_PetProfilePage_properti_icon">
                  <FontAwesomeIcon
                    className="icon-petprofile"
                    icon={faVenusMars}
                  />
                  <p>
                    <span>Giới tính:</span> {pet.gender}
                  </p>
                </div>
                <div className="container_PetProfilePage_properti_icon">
                  <FontAwesomeIcon
                    className="icon-petprofile"
                    icon={faBirthdayCake}
                  />
                  <p>
                    <span>Tuổi:</span> {pet.age} tuổi
                  </p>
                </div>
                <button
                  className="edit-button-mypet styled"
                  onClick={handleEditButtonClick}
                >
                  Chỉnh sửa
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginLeft: "1rem" }}
                  />
                </button>
                <Link to="treatment">
                  <button className="edit-button-mypet styled">Lịch sử</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="container_PetProfilePage_edit-form">
              <div className="container_PetProfilePage_edit-field">
                <label htmlFor="editedName">Tên thú cưng: </label>
                <input
                  className="input-border-mypet"
                  type="text"
                  id="editedName"
                  value={pet.name}
                  onChange={(e) =>
                    setPet({
                      ...pet,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_PetProfilePage_edit-field">
                <FontAwesomeIcon className="icon-petprofile" icon={faDog} />
                <label htmlFor="editedBreed">Nguồn gốc: </label>
                <input
                  className="input-border-mypet"
                  type="text"
                  id="editedBreed"
                  value={pet.breed}
                  onChange={(e) =>
                    setPet({
                      ...pet,
                      breed: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_PetProfilePage_edit-field">
                <FontAwesomeIcon className="icon-petprofile" icon={faPaw} />
                <label htmlFor="editedDescription">Đặc điểm: </label>
                <input
                  className="input-border-mypet"
                  type="text"
                  id="editedDescription"
                  value={pet.description}
                  onChange={(e) =>
                    setPet({
                      ...pet,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_PetProfilePage_edit-field">
                <FontAwesomeIcon
                  className="icon-petprofile"
                  icon={faVenusMars}
                />
                <label htmlFor="editedGender">Giới tính:</label>
                <input
                  className="input-border-mypet"
                  type="text"
                  id="editedGender"
                  value={pet.gender}
                  onChange={(e) =>
                    setPet({
                      ...pet,
                      gender: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_PetProfilePage_edit-field">
                <FontAwesomeIcon
                  className="icon-petprofile"
                  icon={faBirthdayCake}
                />
                <label htmlFor="editedAge">Tuổi:</label>
                <input
                  className="input-border-mypet"
                  type="number"
                  id="editedAge"
                  value={pet.age >= 0 ? pet.age : ""}
                  onChange={(e) => {
                    const age = parseInt(e.target.value);
                    if (!isNaN(age) && age >= 0) {
                      setPet({
                        ...pet,
                        age: age,
                      });
                    } else {
                      setPet({
                        ...pet,
                        age: 0,
                      });
                    }
                  }}
                />
              </div>
              <button
                className="update-button-mypet styled"
                onClick={handleSaveButtonClick}
              >
                Cập nhật
                <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "1rem" }} />
              </button>
            </div>
          )}
        </div>
      )}
      <div className="back-button-profile-container">
        <button onClick={handleBackButtonClick} className="back-button-profile">
          &#8592;
        </button>
      </div>
    </div>
  );
};

export default PetProfilePage;
