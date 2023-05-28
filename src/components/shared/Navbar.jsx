import React, { useState } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import Button from '../resuable/Button';


const Navbar = () => {
    const [model, setModel] = useState(false);
    const handleModel = () => {
        if (model == false) {
            setModel(true);
        }
        else {
            setModel(false);
        }
    }
    return (
        <div className='nav'>
            <div className='nav__item__small'>
                <div>Arpana</div>
                {/* for small screen size */}
                <div className='theme icons'><FiMoon /></div>
                <div className='menu icons' onClick={handleModel}>{model ? <FiX /> : <FiMenu />}</div>
            </div>
            {model && <div className='nav__links__small'>
                <a>Projects</a>
                <div className='nav__links__line'></div>
                <a>About Me</a>
                <div className='nav__links__line'></div>
                <a>Contact</a>
                <div className='nav__links__line'></div>
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
                    <div className='theme icons'><FiMoon /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar