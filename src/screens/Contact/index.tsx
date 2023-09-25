import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-contact">
      <div className="row">
        <div className="col-md-6 image-contact">
          <img
            src="https://i.pinimg.com/originals/cd/19/25/cd1925df955e7bf77548b0f6a48702f8.jpg"
            alt="Avatar của bạn"
            className="img-fluid circle"
          />
        </div>

        <div className="col-md-6 container-contact-form">
          <form action="" className="form-contact">
            <div className="title">
              <h4>Bạn cần chăm sóc thú cưng?</h4>
              <h5>Contact US.</h5>
            </div>
            <div className="form-contact-1">
              <input
                type="text"
                id="name-contact"
                className="form-contact-1-input"
                name="name-contact"
                placeholder="Họ và tên"
                required
              />
            </div>
            <div className="form-contact-2">
              <div className="form-contact-2-phone">
                <input
                  type="text"
                  id="phone-contact"
                  className="form-contact-2-phone-input"
                  name="phone-contact"
                  placeholder="Số điện thoại"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div className="form-contact-2-email">
                <input
                  type="email"
                  id="email-contact"
                  className="form-contact-2-email-input"
                  name="email-contact"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="form-contact-3">
              <textarea
                name="text-contact"
                className="form-contact-3-text"
                placeholder="Lời nhắn"
              ></textarea>
            </div>
            <button className="form-btn" type="submit">
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
