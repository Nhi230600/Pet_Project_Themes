import React from 'react'
import './BookSpa.css'
import { Header, Footer } from '../../../components'
import { FONTSIZE } from '../../../constants'



const BookSpa = () => {
  return (
    <>
        <Header />
        <div className="booking-spa">
            <h1 className="booking-spa-title">Booking Online 24/7</h1>
            <div className="booking-spa-form">
                
                <div className="booking-spa-form-content">
                    <form action="#" className='form-content'>
                        <h2 className="booking-spa-form-title">Đặt lịch SPA</h2>
                        <p> Đặt lịch nhanh</p>
                        <p> Các trường đánh dấu <strong className='important'>*</strong> là bắt buộc</p>
                        <h3> YÊU CẦU DỊCH VỤ: <strong className='important'>*</strong></h3>
                        <p> Vui lòng chọn 1 dịch vụ bạn đang cần để NgáoService có thể chuẩn bị, và phục vụ các bé một cách chu đáo nhất nhé!</p>
                        <select name="services" id="services">
                            <option value="">Tắm vệ sinh</option>
                            <option value="">Cắt tỉa lông</option>
                            <option value="">Combo 1: (Tắm sấy + vệ sinh)</option>
                            <option value="">Combo 2: (Cắt tỉa lông + vệ sinh)</option>
                            <option value="">Combo 3: (Tắm sấy + vệ sinh + cắt tỉa lông)</option>
                            <option value="">Combo 4: (Tắm sấy + vệ sinh + cạo lông)</option>
                        </select>
                        <br />
                        <h3>THỜI GIAN: <strong className='important'>*</strong></h3>
                        <input type="datetime-local" id="spa-time" name="spa-time"></input>
                        <h3>GHI CHÚ:</h3>
                        <textarea name="note" id="note" rows={300} placeholder='Nhập một vài mô tả tình trạng của các bé để chuyên viên của chúng tôt có thể hỗ trợ bạn tốt nhất ...'></textarea>
                        <button className='form-btn styled' type='button'>Gửi yêu cầu</button>
                    </form>
                </div>
            </div>
        </div>
        
        <Footer />
    </>
  )
}

export default BookSpa