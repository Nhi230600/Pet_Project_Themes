import { type } from 'os'
import React from 'react'
import { COLORS, FONTSIZE } from '../../constants';
import './formFooter.css'
type FormFooterProps = {
    buttonName ?: String;
    notify ?: String;
    require ?: String;
}

const FormFooter = (props : FormFooterProps) => {
    const {buttonName = "", notify = "", require = ""} = props;
  return (
    <div>
        <div className='formContent-footer'>
            <button className='formContent-footer-button' style={{fontSize:FONTSIZE.text, backgroundColor:COLORS.input}}>
                <span>{buttonName}</span>
            </button>
        </div>
    </div>
  )
}

export default FormFooter