import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import { Footer, HeaderUser } from "../../components";
import { FONTSIZE } from "../../constants";
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
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const ProfileUser = () => {
  return (
    <div>
      <HeaderUser />
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
                  <Button
                    icon={<UploadOutlined />}
                    style={{ borderRadius: "0.5vw", height: "3vw" }}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div>
            </div>
          </div>
        </div>
        <form action="" className="container-profile-form">
          <div className="container-profile-form-infor"></div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUser;
