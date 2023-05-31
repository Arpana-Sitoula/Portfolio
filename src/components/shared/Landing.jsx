import React from 'react'
import darkDev from '../../assets/darkDev.svg';
import Button from '../resuable/Button';

const Landing = () => {
  return (
    <div className='center-div'>
        <div className='landing'>
        <div className='landing__body'>
            <div className='landing__body__head'>Hi, I am Nirvana</div>
            <div className='landing__body__info'>A frontend developer, designer & machine learning enthusiast</div>
            <button>Download CV</button>
        </div>
        <div>
          <img src={mode=="light"?{darkDev}:{lightDev}}/>
        </div>
    </div>
    </div>
  )
}

export default Landing