import React from 'react'
import { Carousel } from 'antd'
import { FONTFAMILY } from '../../../constants'
import { url } from 'inspector'

function Hommepagecarousel () { 
  const Sliders = [
    {
      id: 1,
      content: "DỊCH VỤ THÚ CƯNG TẠI NHÀ",
      // imageUrl: url"../../../images/slider-img/carousel1.jpg",
    },
    // {
    //   id: 2,
    //   content: "UY TÍN HÀNG ĐẦU VIỆT NAM",
    //   image: '../../images/slider-img/carousel1.jpg',
    // },
    // {
    //   id: 3,
    //   content: "BLLALALALALLALAL",
    //   imageUrl: '../../images/slider-img/carousel1.jpg',
    // }
  ]
  return (
    <div style={{ font: FONTFAMILY.primary}} className="slider">  
      <div id='1'>
        {Sliders.map((Slider, index) =>
        <div className="slider-container" key={index}>
          <div className="slider-content"> {Slider.content} </div>
          {/* <img className="slider-background" src={Slider.imageUrl}> </img> */}
        </div>
        )}  
      </div>  
    </div>
  )
}

export default Hommepagecarousel
