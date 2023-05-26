import React,{useState} from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import Button from '../resuable/Button';


const Navbar = () => {
const [model, setModel] = useState(false);
const handleModel = () =>{
    if(model==false){
        setModel(true);
    }
    else{
        setModel(false);
    }
}
    return (
        <div className='nav'>
            <div className='nav__item'>
                <div>Arpana</div>
                <div className='nav__item__theme icons'><FiMoon/></div>
                <div className=' nav__item__menu icons' onClick={handleModel}>{model?<FiX/>:<FiMenu/>}</div>
            </div>
            {model && <div className='nav__links'>
                <a>Projects</a>
                <div className='nav__links__line'></div>
                <a>About Me</a>
                <div className='nav__links__line'></div>
                <a>Contact</a>
                <div className='nav__links__line'></div>
                <Button title="Hire Me"/>
            </div>
}
        </div>
    )
}

export default Navbar