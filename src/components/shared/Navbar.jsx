import React, { useState } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import Button from '../resuable/Button';


const Navbar = () => {
    const [model, setModel] = useState(false);
    const [theme, setTheme] = useState("light");
    const handleModel = () => {
        if (model == false) {
            setModel(true);
        }
        else {
            setModel(false);
        }
    }
    const handleTheme = () =>{
        console.log("Clicked");
        console.log(theme);
        if(theme == "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    }
    return (
        <div className={`nav ${theme}`}>
             {/* for small screen size */}
            <div className='nav__item__small'>
                <div>Arpana</div>
                <div className={`theme icons i${theme}`} onClick={handleTheme}>{theme=="light"?<FiMoon />:<FiSun/>}</div>
                <div className={`menu icons ${theme}`} onClick={handleModel}>{model ? <FiX /> : <FiMenu />}</div>
            </div>
            {model && <div className='nav__links__small'>
                <a>Projects</a>
                <div className={`line${theme}`}></div>
                <a>About Me</a>
                <div className={`line${theme}`}></div>
                <a>Contact</a>
                <div className={`line${theme}`}></div>
                <Button title="Hire Me" />
            </div>
            }

            {/* for large screen size */}
            <div className='nav_container'>
                <div>Arpana</div>
                <div className='nav__links__large'>
                    <a>Projects</a>
                    <a>About Me</a>
                    <a>Contact</a>
                </div>
                <div className='nav__item__large'>
                    <Button title="Hire Me" />
                    <div className={`theme icons i${theme}`} onClick={handleTheme}>{theme=="light"?<FiMoon />:<FiSun/>}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar