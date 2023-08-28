import { type } from 'os'
import React from 'react'
import { COLORS, FONTCOLOR, FONTFAMILY, FONTSIZE } from '../../constants'
import './Register.css'
import FormContentRegister from '../../components/FormContentRegister'
import FormHeader from '../../components/FormHeader'
import FormFooter from '../../components/FormFooter'

type Props = {
    heading ?: String;
    buttonName ?: String;
    notify ?: String;
    require ?: String;
}

const Register = (props : Props) => {
    const register = { heading : "ĐĂNG KÝ", buttonName : "ĐĂNG KÝ", notify : "Bạn đã có tài khoản ?", require: "Đăng nhập ngay !"}
    
    const backgroundColor = COLORS.primary;

  return (
    <div className='register' style={{backgroundColor}}>
        <div className='register-form' style={{fontFamily: FONTFAMILY.primary, color: FONTCOLOR.primary}}>
            <div className='register-form-content'>
                <form action="#" style={{backgroundColor: COLORS.secondary, borderRadius:'1rem', width:'100%'}}>
                    <FormHeader heading = {register.heading} />
                    <FormContentRegister />
                    <FormFooter buttonName={register.buttonName} notify={register.notify} require={register.require}/>
                    <div className='formContent-nav' style={{fontSize:FONTSIZE.text}}>
                        <div>
                            <span>Bạn đã có tài khoản ?</span>
                        </div>
                        <div>
                            <a href="">Đăng nhập ngay !</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
