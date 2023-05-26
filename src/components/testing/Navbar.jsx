import React, { useState } from 'react'
import Hambug from './Hambug'
import Close from './testing/Close';

const Navbar = () => {
    const [model, setModel] = useState(false);

    const openModel = () => {
        if (model == false)
            setModel(true);
        else
            setModel(false);
    }
    return (
        <div>
            <div className='navbar'>
                <div className='navbar-item'>
                    <div>Logo</div>
                    <div onClick={openModel}>{model == false ? <Hambug /> : <Close />}</div>
                </div>

                {model && <div className='pages'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Service</a>
                </div>}
            </div>
        </div>

    )
}

export default Navbar