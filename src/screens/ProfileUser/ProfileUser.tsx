import { Upload, message } from "antd";
import { Header } from "../../components";

import {
  faEdit,
  faUpload,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FONTSIZE } from "../../application/config/constants";
import AvatarUser from "../../images/avatar-user.jpeg";
import "./ProfileUser.css";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info: any) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed`);
    }
  },
};

const ProfileUser = () => {
  return (
    <div>
      <Header />
      <div className="container-profile">
        <div className="container-profile-avatar">
          <div className="container-profile-avatar-img">
            <div className="container-profile-avatar-upload">
              <div>
                <img
                  src={AvatarUser}
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
                <label
                  style={{ fontSize: FONTSIZE.text, fontWeight: "600" }}
                  htmlFor=""
                >
                  Truong Y Nhi
                </label>
              </div>
              <div>
                <Upload {...props}>
                  <button className="container-profile-avatar-upload-button styled">
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ marginRight: "1rem" }}
                    />
                    Click to Upload
                  </button>
                </Upload>
              </div>
            </div>
          </div>
        </div>
        <form action="" className="container-profile-form">
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
                  value="Truong Y Nhi"
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
                  value="0374540896"
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
                  value="Nhon Hoa, An Nhon, Binh Dinh"
                />
              </div>
            </div>
          </div>
          <div className="container-profile-form-button">
            <div>
              <button type="submit" className="form-button-edit styled">
                Sửa thông tin
                <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "1rem" }} />
              </button>
            </div>
            <div>
              <button type="submit" className="form-button-update styled">
                Cập nhật thông tin
                <FontAwesomeIcon
                  icon={faUserEdit}
                  style={{ marginLeft: "1rem" }}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
