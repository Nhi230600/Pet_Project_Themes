import {
  faCalendarTimes,
  faEdit,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Loading } from "components";
import Nav from "components/Nav";
import CustomerData from "components/UserConstant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProfileUser.css";

const ProfileUser = () => {
  const [customerData, setCustomerData] = useState(CustomerData);
  const [loading, setLoading] = useState(false);
  const updateProfile = () => {
    const updatedData = {
      name: customerData.name,
      phone: customerData.phone,
      address: customerData.address,
    };
    //////////////
    // post api //
    //////////////
    toast.success("sửa xong");
  };
  const handleImageChange = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const cloudName = "dulapxpnp";
    const presetKey = "ml_default";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", presetKey);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;

        // Cập nhật ảnh đã tải lên trong trạng thái hoặc làm bất kỳ xử lý nào bạn cần.
        setCustomerData({ ...customerData, avatar: imageUrl });

        // Bạn có thể thực hiện post API ở đây để cập nhật thông tin khách hàng với ảnh mới.

        toast.success("Tải lên ảnh thành công");
      } catch (error) {
        toast.error("Lỗi tải lên ảnh");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="container-profile">
          <div className="container-profile-avatar">
            <div className="container-profile-avatar-img">
              <div className="container-profile-avatar-upload">
                <div className="daidien">
                  <img
                    src={customerData.avatar}
                    alt="avatar"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "0.3rem solid black",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="">{customerData.name}</label>
                </div>
                <div>
                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={async (e) => {
                      await handleImageChange(e);
                    }}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="container-profile-avatar-upload-button styled"
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ marginRight: "1rem" }}
                    />
                    Click to Upload
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="container-profile-form">
            <div className="container-profile-form-infor">
              <div className="container-profile-form-infor-name">
                <div className="container-profile-form-infor-name-label">
                  Họ tên
                </div>
                <div className="container-profile-form-infor-name-input">
                  <input
                    style={{
                      width: "100%",
                      borderRadius: "0.5vw",
                      height: "3vw",
                      border: "none",
                    }}
                    type="text"
                    name="title"
                    value={customerData.name}
                    onChange={(e) =>
                      setCustomerData({ ...customerData, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="container-profile-form-infor-phonenumber">
                <div className="container-profile-form-infor-phonenumber-label">
                  Số điện thoại
                </div>
                <div className="container-profile-form-infor-name-input">
                  <input
                    style={{
                      width: "100%",
                      borderRadius: "0.5vw",
                      height: "3vw",
                      border: "none",
                    }}
                    type="text"
                    name="title"
                    value={customerData.phone}
                    onChange={(e) =>
                      setCustomerData({
                        ...customerData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="container-profile-form-infor-address">
                <div className="container-profile-form-infor-address-label">
                  Địa chỉ
                </div>
                <div className="container-profile-form-infor-address-input">
                  <input
                    style={{
                      width: "100%",
                      borderRadius: "0.5vw",
                      height: "3vw",
                      border: "none",
                    }}
                    type="text"
                    name="title"
                    value={customerData.address}
                    onChange={(e) =>
                      setCustomerData({
                        ...customerData,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="container-profile-form-button">
              <div>
                <button
                  onClick={updateProfile}
                  className="form-button-edit styled"
                >
                  Sửa thông tin
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginLeft: "1rem" }}
                  />
                </button>
              </div>
              <div>
                <Link to="/appointment">
                  <button className="form-button-update styled">
                    Xem lịch hẹn
                    <FontAwesomeIcon
                      icon={faCalendarTimes}
                      style={{ marginLeft: "1rem" }}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUser;
