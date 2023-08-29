import { type } from 'os'
import React from 'react'
import { COLORS, FONTCOLOR, FONTFAMILY, FONTSIZE } from '../../constants'
import './Login.css'
import FormHeader from '../../components/FormHeader'
import FormContentLogin from '../../components/FormContentLogin'
import FormFooter from '../../components/FormFooter'

type Props = {
    heading ?: String;
    buttonName ?: String;
    notify ?: String;
    require ?: String;
}

const Login = (props : Props) => {
    const login = { heading : "ĐĂNG NHẬP", buttonName : "ĐĂNG NHẬP", notify : "Bạn chưa có tài khoản ?", require: "Đăng ký ngay !"}
    
    const backgroundColor = COLORS.primary;

  return (
    <div className='login' style={{backgroundColor}}>
        <div className='login-form' style={{fontFamily: FONTFAMILY.primary, color: FONTCOLOR.primary}}>
            <div className='login-form-content'>
                <form action="#" style={{backgroundColor: COLORS.secondary, borderRadius:'1rem', width:'100%'}}>
                    <FormHeader heading = {login.heading} />
                    <FormContentLogin />
                    <FormFooter buttonName={login.buttonName} notify={login.notify} require={login.require}/>
                    <div className='formContent-nav' style={{fontSize:FONTSIZE.text}}>
                    <div>
                        <span>Bạn chưa có tài khoản ?</span>
                    </div>
                    <div>
                        <a href="">Đăng ký ngay !</a>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
