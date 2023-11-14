import {
  faCalendar,
  faEdit,
  faKey,
  faMapMarkedAlt,
  faPhone,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Customer, CustomerData, GlobalLink, Loading } from "components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./DetailCustomer.css";

const DetailCustomer = () => {
  const { CustomerId } = useParams();
  const id = CustomerId;
  const [Customers, setCustomers] = useState<Customer[]>(CustomerData);
  const [loading, setLoading] = useState(false);
  const [Customer, setCustomer] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const selectedCustomer = Customers.find((p) => p.id === parseInt(id));
      if (selectedCustomer) {
        setCustomer(selectedCustomer);
      }
    }
  }, [id, Customers]);

  const handleAvatarUpload = async (event: any) => {
    setLoading(true);
    const file = event.target.files[0];
    const presetKey = "ml_default";
    if (file && Customer) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", presetKey);
      try {
        const response = await axios.post(
          `${GlobalLink.clouldinary}`,
          formData,
        );
        const imageUrl = response.data.secure_url;
        setCustomer({ ...Customer, avatar: imageUrl });
        toast.success("Ảnh đã được tải lên thành công! 😊");
      } catch (error) {
        toast.error("Có lỗi xảy ra khi tải lên hình ảnh! ☹️");
      }
    }
    setLoading(false);
  };
  const handleEditButtonClick = () => {
    if (Customer) {
      setIsEditing(true);
    }
  };
  const handleSaveButtonClick = () => {
    toast.success("Cập nhật thông tin thành công! 😊");
    setIsEditing(false);
  };

  if (!Customer) {
    return <p>Không tìm thấy khách hàng</p>;
  }

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container_customer">
          <div className="container_customer_img">
            <img src={Customer.avatar} alt={Customer.name} />
            <div className="button-edit-image-detail-customer">
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleAvatarUpload}
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
                <FontAwesomeIcon icon={faUpload} />
                Click to Upload
              </label>
            </div>
          </div>
          {!isEditing ? (
            <div className="container_customer_information">
              <div className="container_customer_customer-name">
                <h1>{Customer.name}</h1>
              </div>
              <div className="container_customer_properti">
                <div className="container_customer_properti_icon">
                  <FontAwesomeIcon
                    className="icon-customer-profile"
                    icon={faUser}
                  />
                  <p>
                    <span>Tên tài khoản:</span> {Customer.account}
                  </p>
                </div>
                <div className="container_customer_properti_icon">
                  <FontAwesomeIcon
                    className="icon-customer-profile"
                    icon={faKey}
                  />
                  <p>
                    <span>Mật khẩu:</span> {Customer.password}
                  </p>
                </div>
                <div className="container_customer_properti_icon">
                  <FontAwesomeIcon
                    className="icon-customer-profile"
                    icon={faPhone}
                  />
                  <p>
                    <span>Số điện thoại:</span> {Customer.phone}
                  </p>
                </div>
                <div className="container_customer_properti_icon">
                  <FontAwesomeIcon
                    className="icon-customer-profile"
                    icon={faMapMarkedAlt}
                  />
                  <p>
                    <span>Địa chỉ:</span> {Customer.address}
                  </p>
                </div>
                <div className="container_customer_properti_icon">
                  <FontAwesomeIcon
                    className="icon-customer-profile"
                    icon={faCalendar}
                  />
                  <p>
                    <span>Số đơn hẹn:</span> {Customer.appointments}
                  </p>
                </div>
                <button
                  className="edit-button-detail-customer styled"
                  onClick={handleEditButtonClick}
                >
                  Chỉnh sửa
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ marginLeft: "1rem" }}
                  />
                </button>
                <Link to="treatment">
                  <button className="edit-button-detail-customer styled">
                    Lịch sử
                  </button>
                </Link>
                <Link to="pet">
                  <button className="edit-button-detail-customer styled">
                    Thú cưng
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="container_customer_edit-form">
              <div className="container_customer_edit-field">
                <label htmlFor="editedName">Tên khách hàng: </label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  value={Customer.name}
                  onChange={(e) =>
                    setCustomer({
                      ...Customer,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_customer_edit-field">
                <FontAwesomeIcon
                  className="icon-customer-profile"
                  icon={faUser}
                />
                <label htmlFor="editedAccount">Tên tàì khoản: </label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  value={Customer.account}
                  onChange={(e) =>
                    setCustomer({
                      ...Customer,
                      account: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_customer_edit-field">
                <FontAwesomeIcon
                  className="icon-customer-profile"
                  icon={faKey}
                />
                <label htmlFor="editedPassword">Mật khẩu: </label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  value={Customer.password}
                  onChange={(e) =>
                    setCustomer({
                      ...Customer,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_customer_edit-field">
                <FontAwesomeIcon
                  className="icon-customer-profile"
                  icon={faPhone}
                />
                <label htmlFor="editedPhone">Số điện thoại:</label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  value={Customer.phone}
                  onChange={(e) =>
                    setCustomer({
                      ...Customer,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_customer_edit-field">
                <FontAwesomeIcon
                  className="icon-customer-profile"
                  icon={faMapMarkedAlt}
                />
                <label htmlFor="editedAddress">Địa chỉ</label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  value={Customer.address}
                  onChange={(e) =>
                    setCustomer({
                      ...Customer,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="container_customer_edit-field">
                <FontAwesomeIcon
                  className="icon-customer-profile"
                  icon={faCalendar}
                />
                <label htmlFor="editedAppointment">Số đơn hẹn</label>
                <input
                  className="input-border-detail-customer"
                  type="text"
                  readOnly={true}
                  value={Customer.appointments}
                />
              </div>
              <button
                className="update-button-detail-customer styled"
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

export default DetailCustomer;
