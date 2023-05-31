import React, {useState} from 'react'
import Navbar from '../components/shared/Navbar'
import Landing from '../components/shared/Landing'
import Footer from '../components/shared/Footer'

const Home = () => {
const [mode, setMode] =useState("light");
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Footer/>
    </div>
  )
}

export default Home