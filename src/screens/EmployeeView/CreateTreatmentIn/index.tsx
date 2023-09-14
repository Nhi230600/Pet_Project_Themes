import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useParams } from 'react-router-dom';
import { Input, Button, Modal, Form } from 'antd';
import './CreateTreatmentIn.css';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;


function CreateTreatmentIn() {
    const navigate = useNavigate();

  const [treatmentProfile, setTreatmentProfile] = useState({
    description: '',
    customerID: 0,
  });
  const [customer, setCustomer] = useState({
    fullname: '',
    gender: '',
    age: '',
  });
  const [treatmentIn, setTreatmentIn] = useState({
    process: '',
    result: '',
    note: '',
  });
  const [showConfirmationComplete, setShowConfirmationComplete] = useState(false);
  const [showConfirmationReappoint, setShowConfirmationReappoint] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTreatmentProfile = async () => {
      // Mô phỏng dữ liệu từ API
      const profileData = {
        description: 'Mô tả treatment của động vật',
        customerID: 1, // ID của khách hàng
      };

      setTreatmentProfile(profileData);

      // Mô phỏng dữ liệu từ API
      const customerData = {
        fullname: 'Chó A',
        gender: 'Nam',
        age: '5'
      };

      setCustomer(customerData);
      setIsLoading(false);
    };

    fetchTreatmentProfile();
  }, []);

  const handleComplete = () => {
    if (treatmentIn.process && treatmentIn.result && treatmentIn.note) {
      setShowConfirmationComplete(true);
    } else {
      Modal.error({
        title: 'Lỗi',
        content: 'Vui lòng điền đầy đủ thông tin trước khi hoàn thành quá trình dịch vụ.',
      });
    }
  };

  const handleConfirmationCompleteConfirm = async () => {
    try {
        toast.success("Buổi khám thàng công, ngày mới vui vẻ");
        navigate("/");
    } catch (error) {
      console.error('Error confirming treatment:', error);
    }
  };

  const handleReappoint = () => {
    if (treatmentIn.process && treatmentIn.result && treatmentIn.note) {
      setShowConfirmationReappoint(true);
    } else {
      Modal.error({
        title: 'Lỗi',
        content: 'Vui lòng điền đầy đủ thông tin trước khi đặt lại cuộc hẹn sau.',
      });
    }
  };

  const handleConfirmationReappointConfirm = async () => {
    try {
      window.location.href = `/rebook`;
    } catch (error) {
      console.error('Error confirming treatment:', error);
    }
    setShowConfirmationReappoint(false);
  };

  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h2>Cập nhật tiến trình dịch vụ</h2>
      <div className="profile-details">
        <div>
          <label>Tên:</label>
          <Input type="text" value={customer ? customer.fullname : ''} readOnly />
        </div>
        <div>
          <label>Giới tính:</label>
          <Input type="text" value={customer ? customer.gender : ''} readOnly />
        </div>
        <div>
          <label>Tuổi:</label>
          <Input type="text" value={customer ? customer.age : ''} readOnly />
        </div>
        <div>
          <label>Ngày:</label>
          <Input type="text" value={moment.tz(moment(), 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD')} readOnly />
        </div>
      </div>
      <div className="input-form">
        <h3>Treatment</h3>
        <div className="treatment-profile">
          <Input type="text" value={treatmentProfile.description} readOnly />
        </div>
        <div className="input-boxes">
          <div className="input-box">
            <label>Quá trình điều trị:</label>
            <TextArea
              rows={4}
              name="process"
              value={treatmentIn.process}
              onChange={(e) => setTreatmentIn({ ...treatmentIn, process: e.target.value })}
            />
          </div>
          <div className="input-box">
            <label>Kết quả:</label>
            <TextArea
              rows={4}
              name="result"
              value={treatmentIn.result}
              onChange={(e) => setTreatmentIn({ ...treatmentIn, result: e.target.value })}
            />
          </div>
          <div className="input-box">
            <label>Lời khuyên:</label>
            <TextArea
              rows={4}
              name="note"
              value={treatmentIn.note}
              onChange={(e) => setTreatmentIn({ ...treatmentIn, note: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="action-buttons">
        <Button type="primary" onClick={handleComplete}>
          Xong
        </Button>
        <Button type="primary" onClick={handleReappoint}>
          Đặt hẹn sau
        </Button>
      </div>

      <Modal
        title="Xác nhận"
        visible={showConfirmationComplete}
        onOk={handleConfirmationCompleteConfirm}
        onCancel={() => setShowConfirmationComplete(false)}
        okText="Xác nhận"
        cancelText="Đóng"
      >
        <p>Bạn có chắc chắn muốn hoàn thành quá trình dịch vụ?</p>
      </Modal>

      <Modal
        title="Xác nhận"
        visible={showConfirmationReappoint}
        onOk={handleConfirmationReappointConfirm}
        onCancel={() => setShowConfirmationReappoint(false)}
        okText="Xác nhận"
        cancelText="Đóng"
      >
        <p>Bạn có chắc chắn muốn đặt lại cuộc hẹn sau?</p>
      </Modal>
    </div>
  );
}

export default CreateTreatmentIn;
