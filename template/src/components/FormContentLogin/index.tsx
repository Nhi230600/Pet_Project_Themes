import React from 'react'
import { COLORS, FONTCOLOR, FONTSIZE } from '../../constants'
import { type } from 'os'
import './formContentLogin.css'

type FormContentLoginProps = {
    
}


const FormContentLogin = (props : FormContentLoginProps) => {
  return (
    <div className='formContent-content'>
        <div className='formContent-content-infomation'>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Tên tài khoản * :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="text"/></div>
            </div>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Mật khẩu * :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="password"/></div>
            </div>
        </div>
    </div>
  )
}

export default FormContentLogin
