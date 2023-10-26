import { UploadOutlined } from "@ant-design/icons";
import { faEdit, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Modal, Upload, UploadFile } from "antd";
import Nav from "components/Nav";
import { useState } from "react";
import "./ProfileUser.css";

const ProfileUser = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const uploadedImage = imageUrl ? (
    <Image src={imageUrl} style={{ width: 200, height: 200 }} />
  ) : null;

  return (
    <div>
      <Nav />
      <div className="container-profile">
        <div className="container-profile-avatar">
          <div className="container-profile-avatar-img">
            <div className="container-profile-avatar-upload">
              <div>
                <div className="container-profile-avatar-upload">
                  {uploadedImage || (
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                  )}
                </div>
              </div>
              <div>
                <label>Nguyễn Văn Khách Hàng</label>
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
                  value="Ngocneeee"
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
                  value="Nhon An, An Nhon, Binh Dinh"
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
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default ProfileUser;
