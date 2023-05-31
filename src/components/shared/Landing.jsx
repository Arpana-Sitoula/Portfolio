import React from 'react'
import darkDev from '../../assets/darkDev.svg';
import lightDev from '../../assets/lightDev.svg';
import { BsArrowDownCircle } from "react-icons/bs";

const Landing = ({theme,setTheme}) => {
  return (
    <div className='center-div'>
        <div className={`landing ${theme}`}>
        <div className='landing__body'>
            <div className='landing__body__head'>Hi, I am Nirvana</div>
            <div className='landing__body__info'>A frontend developer, designer & machine learning enthusiast</div>
            <button className='landing__body__btn'><div><BsArrowDownCircle/> Download CV </div></button>
        </div>
        <div>
          {theme=="light"? <img src={darkDev}/>: <img src={lightDev}/>}
         
        </div>
    </div>
    </div>
  )
}

export default Landing