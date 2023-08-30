import { type } from 'os'
import React from 'react'
import { COLORS, FONTCOLOR, FONTSIZE } from '../../constants';
import Logo from '../../images/logo.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faPhoneAlt, faClock, faStreetView, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

type FooterProps = {

}

const Footer = (props : FooterProps) => {
  const {} = props ;
  const backgroundColor = COLORS.primary;
  return (
    <footer className='footer' style={{backgroundColor}}>
      <div className='footer-logo'>
        <div className='footer-logo-image'>
          <img style={{width:'80%'}} src={Logo} alt="Logo" />
        </div>
        <div className='footer-logo-name'>
          <a href="" style={{color:FONTCOLOR.primary, fontSize:FONTSIZE.logoSmall, textDecoration:'none'}}><span style={{textShadow:'0.1rem 0.1rem 0.1rem white'}}>NgáoService</span></a>
        </div>
      </div>
      <div className='footer-information' style={{fontSize:FONTSIZE.text}}>
        <div className='footer-information-name'>
          <span>INFORMATION</span>
        </div>
        <div className='footer-information-content'>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>397-5 Hapjeong-dong, Mapo-gu, Seoul, Hàn Quốc</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhoneAlt} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>+82234421104</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>08:00 MON - 23:00 SAT</a>
          </div>
        </div>
      </div>
      <div className='footer-service' style={{fontSize:FONTSIZE.text}}>
        <div className='footer-service-name'>
          <span>SERVICE</span>
        </div>
        <div className='footer-service-content'>
          <div>
            <FontAwesomeIcon icon={faStreetView} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>Chi nhánh tại TPHCM</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faStreetView} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>Chi nhánh tại Hà Nội</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faStreetView} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>Chi nhánh tại Đà Nẵng</a>
          </div>
        </div>
      </div>
      <div className='footer-network' style={{fontSize:FONTSIZE.text}}>
        <div className='footer-network-name'>
          <span>NETWORK</span>
        </div>
        <div className='footer-network-content'>
          <div>
            <FacebookOutlined style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>Facebook</a>
          </div>
          <div>
            <InstagramOutlined style={{marginRight:'1rem'}}/>            
            <a href="" style={{color:FONTCOLOR.primary}}>Instagram</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'1rem'}}/>
            <a href="" style={{color:FONTCOLOR.primary}}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer