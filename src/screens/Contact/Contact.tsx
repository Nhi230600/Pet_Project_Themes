import React from 'react'
import {Header, Footer} from "../../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faStore } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import { COLORS } from '../../constants'
const Contact = () => {
  return (
    <div>
        <Header />
        <div className="container-contact">
            <div className="container-contact-info">
                <div className="container-contact-info-1">
                    <span className='container-contact-info-1-title'>Liên hệ</span>
                    <h1>Hãy ghé thăm NgáoService nhé!</h1>        
                </div>
                <div className="container-contact-info-2">
                    <p>NgáoService ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của mọi nhà với hơn nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Thú y, Huấn luyện thú cưng, Dịch vụ dắt chó đi dạo, Cung cấp các dòng thú cưng chuyên nghiệp…</p>
                </div>
                <div className="container-contact-info-3">
                    <FontAwesomeIcon icon={faStore} /> <span>397-5 Hapjeong-dong, Mapo-gu, Seoul, Hàn Quốc</span><br />
                    <FontAwesomeIcon icon={faPhone} /> <span>+82234421104</span> <br />
                    <FontAwesomeIcon icon={faEnvelope}/> <span>ngaoservice@gmail.com</span>
                </div>
                
            </div>

            <div className="container-contact-form">       
                
                <form action="" className='form-contact'>
                    <span>Đóng góp ý kiến</span> <br />
                    <span>Các trường đánh dấu <strong>*</strong> là bắt buộc</span><br />
                    <div className="form-contact-1">
                        <h3>Họ và tên <strong>*</strong></h3>
                        <input className='form-contact-1-input' type="text" id='name-contact' name='name-contact' placeholder='...' required onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Vui lòng nhập họ và tên.')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}/>
                    </div>
                    <div className="form-contact-2">
                        <div className="form-contact-2-phone">
                            <h3>Số điện thoại <strong>*</strong> </h3>
                            <input className='form-contact-2-phone-input' type="text" id='phone-contact' name='phone-contact' placeholder='...'/>
                        </div>
                        <div className="form-contact-2-email">
                            <h3>Email <strong>*</strong></h3>
                            <input className='form-contact-2-email-input' type="text" id='email-contact' name='email-contact' placeholder='...'/>
                        </div>
                    </div>
                    <div className="form-contact-3">
                        <h3>Lời nhắn <strong>*</strong></h3>
                        <textarea name="text" className="form-contact-3-text" rows={8} placeholder='NgáoService luôn lắng nghe mọi đóng góp quý báu và không ngừng nâng cấp cải thiện chất lượng dịch vụ nhằm phục vụ quý khách hàng một cách tốt nhất.'></textarea>
                    </div>
                    <div>
                        <button className="form-button-send styled" type="submit">Gửi yêu cầu</button>    
                    </div>
                    
                </form>
            </div>
        </div>
        <Footer />
    </div>
   
  )
}

export default Contact

