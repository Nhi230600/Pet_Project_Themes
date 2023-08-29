import React from 'react'
import { COLORS, FONTCOLOR, FONTSIZE } from '../../constants'
import { type } from 'os'
import './formContentRegister.css'
type FormContentRegisterProps = {
    nameInformation ?: String;
}


const FormContentRegister = (props : FormContentRegisterProps) => {
  return (
    <div className='formContent-content'>
        <div className='formContent-content-infomation'>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Họ tên :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="text"/></div>
            </div>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Số điện thoại :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="text"/></div>
            </div>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Email :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="text"/></div>
            </div>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Tài khoản :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="text"/></div>
            </div>
            <div style={{display:'flex', width:'100%', marginBottom:'1rem'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Mật khẩu :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="password"/></div>
            </div>
            <div style={{display:'flex', width:'100%'}}>
                <div style={{width: '30%', fontSize: FONTSIZE.text}}><span>Nhập lại mật khẩu :</span></div>
                <div style={{width: '70%'}}><input style={{width: '100%', borderRadius: '0.3rem', height: '2.5rem', backgroundColor:COLORS.input, border:'none'}} type="password"/></div>
            </div>
        </div>
    </div>
  )
}

export default FormContentRegister
