import React, {useState} from 'react'
import Navbar from '../components/shared/Navbar'
import Landing from '../components/shared/Landing'
import Footer from '../components/shared/Footer'

const Home = () => {
const [theme, setTheme] =useState("light");
  return (
    <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Landing theme={theme} setTheme={setTheme}/>
        <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Home