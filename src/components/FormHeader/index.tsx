import { type } from 'os'
import React from 'react'
import { FONTSIZE } from '../../constants'
import './formHeader.css'

type FormHeaderProps = {
    heading ?: String;
}

const FormHeader = (props : FormHeaderProps) => {
    const {heading = ""} = props;
    return (
    <div className='formContent-header'>
        <div className='formContent-header-logo'>
            <div className='formContent-header-logo-img'>
                <img className='formContent-header-logo-image' src="https://o.remove.bg/downloads/d7a2b45d-a32b-4ee6-bec5-cf2ac1c392c1/4-world-dog-showDogLogoDesigns-300x147-removebg-preview.png" alt="LOGO" />
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
