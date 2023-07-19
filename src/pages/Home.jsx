import React, {useState} from 'react'
import Navbar from '../components/shared/Navbar'
import Landing from '../components/shared/Landing'
import Footer from '../components/shared/Footer'

const Home = () => {
const [theme, setTheme] =useState("light");
  return (
    <div className={`home ${theme}`}>
       <div className='home__top'><Navbar theme={theme} setTheme={setTheme}/></div> 
       <div className='home__body'><Landing theme={theme}/></div>
       <div className='home__foot'> <Footer theme={theme}/></div>
    </div>
  )
}

export default Home