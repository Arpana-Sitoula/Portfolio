import React, { useState } from 'react'





const Card = () => {

    const [mode, setMode] = useState("dark");

    const toggleMode = () => {
        if (mode == "dark") {
            setMode("light");
        }
        else{
            setMode("dark");
        }
    }
    return (
        <div className='center-div'>
        <div className={`container ${mode}-mode`}>
                <button className={`${mode}-mode`} onClick={toggleMode}>{mode=="light"? "dark":"light"} mode</button>
                <div>
                    Oh, simple thing where have you gone gone? I am getting old and I need something to rely on.
                    So tell me when you gonna let me in?
                    I am getting tired and I need somewhere to begin.
                    If you have a minute why don't we go?
                    Talk about a somewhere only we know?
                </div>
            </div>
        </div>

    )
}

export default Card