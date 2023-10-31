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
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./PetProfilePage.css";

const PetProfilePage = () => {
  const { id } = useParams();
  const [pets, setPets] = useState<Pet[]>(petData);
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState<Pet | null>(null);
  const [myPets, setMyPets] = useState(petData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPetInfo, setEditedPetInfo] = useState({
    name: "",
    breed: "",
    description: "",
    gender: "",
    age: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const selectedPet = pets.find((p) => p.id === parseInt(id));
      if (selectedPet) {
        setPet(selectedPet);
      }
    }
  }, [id, pets]);

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    if (file && pet) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const uploadedImage = e.target.result;

          if (uploadedImage) {
            const petIndex = myPets.findIndex((p) => p.id === pet.id);
            if (petIndex !== -1) {
              const updatedMyPets = [...myPets];
              updatedMyPets[petIndex].image = uploadedImage as string;
              setMyPets(updatedMyPets);
              toast.success("Ảnh đã được tải lên thành công! 😊 ", {
                autoClose: 3000,
              });
            }
          }
        }
      };
      reader.onerror = () => {
        toast.error("Có lỗi xảy ra khi tải lên hình ảnh! ☹️", {
          autoClose: 3000,
        });
      };
      reader.readAsDataURL(file);
    }
    setLoading(false);
  };
  const handleEditButtonClick = () => {
    if (pet) {
      setIsEditing(true);
      setEditedPetInfo({
        name: pet.name,
        breed: pet.breed,
        description: pet.description,
        gender: pet.gender,
        age: pet.age.toString(),
      });
    }
  };

  const handleSaveButtonClick = () => {
    if (pet) {
      const updatedAge = parseInt(editedPetInfo.age, 10);
      if (!isNaN(updatedAge)) {
        const petIndex = myPets.findIndex((p) => p.id === pet.id);

        if (petIndex !== -1) {
          const updatedMyPets = [...myPets];
          updatedMyPets[petIndex] = {
            ...updatedMyPets[petIndex],
            age: updatedAge,
          };
          setMyPets(updatedMyPets);
          setIsEditing(false);
          toast.success("Thông tin đã được cập nhật thành công! 😊", {
            autoClose: 3000,
          });
        }
      } else {
        toast.error("Lỗi! Số tuổi vui lòng nhập số! ☹️", { autoClose: 3000 });
      }
    }
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
          <div className="container_PetProfilePage_full">
            <div className="container_PetProfilePage_petName">
              {isEditing ? (
                <input
                  type="text"
                  value={editedPetInfo.name}
                  onChange={(e) =>
                    setEditedPetInfo({
                      ...editedPetInfo,
                      name: e.target.value,
                    })
                  }
                />
              ) : (
                <h1>{pet.name}</h1>
              )}
            </div>
            <div className="container_PetProfilePage_properti">
              <div className="container_PetProfilePage_properti_icon">
                <FontAwesomeIcon className="icon-petprofile" icon={faDog} />
                <p>
                  <span>Nguồn gốc:</span>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPetInfo.breed}
                      onChange={(e) =>
                        setEditedPetInfo({
                          ...editedPetInfo,
                          breed: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pet.breed
                  )}
                </p>
              </div>
              <div className="container_PetProfilePage_properti_icon">
                <FontAwesomeIcon className="icon-petprofile" icon={faPaw} />
                <p>
                  <span>Đặc điểm:</span>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPetInfo.description}
                      onChange={(e) =>
                        setEditedPetInfo({
                          ...editedPetInfo,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pet.description
                  )}
                </p>
              </div>
              <div className="container_PetProfilePage_properti_icon">
                <FontAwesomeIcon
                  className="icon-petprofile"
                  icon={faVenusMars}
                />
                <p>
                  <span>Giới tính:</span>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPetInfo.gender}
                      onChange={(e) =>
                        setEditedPetInfo({
                          ...editedPetInfo,
                          gender: e.target.value,
                        })
                      }
                    />
                  ) : (
                    pet.gender
                  )}
                </p>
              </div>
              <div className="container_PetProfilePage_properti_icon">
                <FontAwesomeIcon
                  className="icon-petprofile"
                  icon={faBirthdayCake}
                />
                <p>
                  <span>Tuổi:</span>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedPetInfo.age}
                      onChange={(e) =>
                        setEditedPetInfo({
                          ...editedPetInfo,
                          age: e.target.value,
                        })
                      }
                    />
                  ) : (
                    `${pet.age} tuổi`
                  )}
                </p>
              </div>
            </div>
            <div className="edit-button-mypet-container">
              {isEditing ? (
                <button
                  className="edit-button-mypet styled"
                  onClick={handleSaveButtonClick}
                >
                  Cập nhật
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginLeft: "1rem" }}
                  />
                </button>
              ) : (
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
              )}
            </div>
          </div>
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
