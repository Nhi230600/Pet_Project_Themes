import { type } from 'os'
import React from 'react'
import { FONTSIZE } from '../../constants'
import './formHeader.css'
import Logo from '../../images/logo.png'

type FormHeaderProps = {
    heading ?: String;
}

const FormHeader = (props : FormHeaderProps) => {
    const {heading = ""} = props;
    return (
    <div className='formContent-header'>
        <div className='formContent-header-logo'>
            <div className='formContent-header-logo-img'>
                <img className='formContent-header-logo-image' src={Logo} alt="LOGO" />
            </div>
            <div className='formContent-header-logo-name' style={{fontSize:FONTSIZE.logoSmall}}>
                <span>NgáoService</span>
            </div>
        </div>
        <div className='formContent-header-heading'>
           <span style={{fontSize:FONTSIZE.heading}}>{heading}</span>
        </div>
    </div>
    )
}

export default FormHeader
