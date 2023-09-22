import React from 'react'
import './TrainerList.css'
import trainer1 from 'images/trainer1.jpg'
import trainer2 from 'images/trainer2.jpg'
import trainer3 from 'images/trainer3.jpg'
import trainer4 from 'images/trainer4.jpg'

const TrainerList = () => {
  const trainerdata = [
    {
      img : trainer4,
      name: 'John Nguyen',
      position: 'Trainer',
      exp: '4 years' 
    },
    {
      img : trainer2,
      name: 'Malina Tran',
      position: 'Veterinarian',
      exp: '3 years' 
    },
    {
      img : trainer3,
      name: 'Jack Ngo',
      position: 'Founder',
      exp: '5 years' 
    }
  ]
  
  return (
    <div className='trainerlist-container'>
      <div className="trainerlist-container-title">
        <span>Our Trainer</span>
      </div>
      
      <div className="trainerlist-container-content">
        {trainerdata.map((data) => (
          <div className="trainerlist-container-content-detail">
            <div className="trainerlist-container-content-detail-img">
              <img className='trainer-img' src={data.img} alt="" />
            </div>
            <div className="trainerlist-container-content-detail-name">
              <h1>{data.name}</h1>
              <p>{data.position}</p>
              <p>{data.exp}</p>
              <button className='trainerlist-container-content-detail-btn'>VIEW MORE</button>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default TrainerList